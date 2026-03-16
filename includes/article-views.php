<?php
/**
 * Per-session view counter for an article.
 *
 * Requires $article_slug to be set before including.
 * Increments views in article/JSON/Stats.json once per session per article.
 */

if (!isset($article_slug) || $article_slug === '') {
    return;
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['views'][$article_slug])) {
    // Already counted this article in this session.
    return;
}

$_SESSION['views'][$article_slug] = true;

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

if (!isset($data[$article_slug]) || !is_array($data[$article_slug])) {
    $data[$article_slug] = ['views' => 0, 'like' => 0, 'love' => 0];
}

$data[$article_slug]['views'] = (int) ($data[$article_slug]['views'] ?? 0) + 1;

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

