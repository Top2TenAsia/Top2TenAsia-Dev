<?php
/**
 * Reaction API: session-based like / love per article.
 *
 * POST:
 *   - article: article slug (string)
 *   - reaction: "like" | "love"
 *
 * Behaviour per session, per article:
 *   - First click on like/love -> add +1 to that reaction.
 *   - Click the same reaction again -> remove it (-1).
 *   - Switch (like -> love, or love -> like) -> decrement old, increment new.
 *
 * Response JSON:
 *   { "like": <int>, "love": <int>, "current": "like"|"love"|null }
 */

declare(strict_types=1);

session_start();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$slug     = isset($_POST['article']) ? trim((string) $_POST['article']) : '';
$reaction = isset($_POST['reaction']) ? trim((string) $_POST['reaction']) : '';

if ($slug === '' || !in_array($reaction, ['like', 'love'], true)) {
    echo json_encode(['like' => 0, 'love' => 0, 'current' => null]);
    exit;
}

$statsPath = dirname(__DIR__) . '/article/JSON/Stats.json';
$data      = [];

if (is_file($statsPath)) {
    $raw = @file_get_contents($statsPath);
    if ($raw !== false) {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            $data = $decoded;
        }
    }
}

if (!isset($data[$slug]) || !is_array($data[$slug])) {
    $data[$slug] = ['views' => 0, 'like' => 0, 'love' => 0];
}

$like = (int) ($data[$slug]['like'] ?? 0);
$love = (int) ($data[$slug]['love'] ?? 0);

// Previous reaction for this article in this session (if any)
$previous = $_SESSION['reaction'][$slug] ?? null;
$current  = null;

if ($previous === $reaction) {
    // Same reaction clicked again -> remove it
    if ($reaction === 'like' && $like > 0) {
        $like--;
    } elseif ($reaction === 'love' && $love > 0) {
        $love--;
    }
    unset($_SESSION['reaction'][$slug]);
    $current = null;
} else {
    // If they had a different reaction, remove that first
    if ($previous === 'like' && $like > 0) {
        $like--;
    } elseif ($previous === 'love' && $love > 0) {
        $love--;
    }

    // Apply the new reaction
    if ($reaction === 'like') {
        $like++;
    } else {
        $love++;
    }

    $_SESSION['reaction'][$slug] = $reaction;
    $current                     = $reaction;
}

$data[$slug]['like'] = $like;
$data[$slug]['love'] = $love;

// Persist changes with basic file locking
$dir = dirname($statsPath);
if (!is_dir($dir)) {
    @mkdir($dir, 0775, true);
}

$fp = @fopen($statsPath, 'c+');
if ($fp) {
    if (flock($fp, LOCK_EX)) {
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_PRETTY_PRINT));
        fflush($fp);
        flock($fp, LOCK_UN);
    }
    fclose($fp);
}

echo json_encode([
    'like'    => $like,
    'love'    => $love,
    'current' => $current,
]);

