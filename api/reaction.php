<?php
/**
 * Reaction API: one like or love per person per article (using cookie).
 * POST: article=<slug>&reaction=like|love
 * Returns JSON: { "like": n, "love": m }
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$slug = isset($_POST['article']) ? trim((string) $_POST['article']) : '';
$reaction = isset($_POST['reaction']) ? trim((string) $_POST['reaction']) : '';
$remove = isset($_POST['remove']) && $_POST['remove'] === '1';

if ($slug === '' || !in_array($reaction, ['like', 'love'], true)) {
    echo json_encode(['like' => 0, 'love' => 0]);
    exit;
}

$cookieName = 'r_' . substr(preg_replace('/[^a-zA-Z0-9_-]/', '_', $slug), 0, 40);
$already = isset($_COOKIE[$cookieName]) ? trim($_COOKIE[$cookieName]) : '';

$stats_path = dirname(__DIR__) . '/article/JSON/Stats.json';
$data = [];
if (file_exists($stats_path)) {
    $raw = @file_get_contents($stats_path);
    if ($raw !== false) {
        $data = @json_decode($raw, true);
    }
}
if (!is_array($data)) {
    $data = [];
}

if (!isset($data[$slug])) {
    $data[$slug] = ['views' => 0, 'like' => 0, 'love' => 0];
}
$like = (int) ($data[$slug]['like'] ?? 0);
$love = (int) ($data[$slug]['love'] ?? 0);

$doRemove = $remove && $already === $reaction;
$doIncrement = !$doRemove && ($already !== 'like' && $already !== 'love');

if ($doRemove) {
    if ($reaction === 'like' && $like > 0) {
        $like--;
    } elseif ($reaction === 'love' && $love > 0) {
        $love--;
    }
    $data[$slug]['like'] = $like;
    $data[$slug]['love'] = $love;
    $fp = @fopen($stats_path, 'c+');
    if ($fp && flock($fp, LOCK_EX)) {
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_PRETTY_PRINT));
        flock($fp, LOCK_UN);
        fclose($fp);
    }
    header('Set-Cookie: ' . $cookieName . '=; path=/; max-age=0; SameSite=Lax', false);
} elseif ($doIncrement) {
    if ($reaction === 'like') {
        $like++;
    } else {
        $love++;
    }
    $data[$slug]['like'] = $like;
    $data[$slug]['love'] = $love;
    $fp = @fopen($stats_path, 'c+');
    if ($fp && flock($fp, LOCK_EX)) {
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_PRETTY_PRINT));
        flock($fp, LOCK_UN);
        fclose($fp);
    }
    header('Set-Cookie: ' . $cookieName . '=' . $reaction . '; path=/; max-age=31536000; SameSite=Lax', false);
}

echo json_encode(['like' => $like, 'love' => $love]);
