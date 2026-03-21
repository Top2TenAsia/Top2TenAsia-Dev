<?php
require_once __DIR__ . '/includes/donation-config.php';

$settings = donation_settings();
$methodKey = donation_slugify($_GET['method'] ?? '');
$method = donation_get_method($methodKey);

if (!$method || empty($method['url'])) {
    $fallbackKey = $settings['primary_method'];
    $fallback = donation_get_method($fallbackKey);
    if ($fallback && !empty($fallback['url'])) {
        $methodKey = $fallbackKey;
        $method = $fallback;
    } else {
        header('Location: ' . donation_support_page_url(['setup' => 'payment-method-missing']));
        exit;
    }
}

$amount = preg_replace('/[^0-9]/', '', (string) ($_GET['amount'] ?? ''));
$location = donation_slugify($_GET['location'] ?? 'link');
$variant = donation_slugify($_GET['variant'] ?? 'control');
$article = donation_slugify($_GET['article'] ?? donation_current_article_slug());
$source = donation_slugify($_GET['source'] ?? donation_detect_source());
$page = donation_normalize_path($_GET['page'] ?? donation_current_page_path());

donation_record_event('donation_click', [
    'source' => $source,
    'browser' => donation_detect_browser_context(),
    'article' => $article,
    'location' => $location,
    'method' => $methodKey,
    'variant' => $variant,
    'amount' => $amount !== '' ? $amount : 'unknown',
    'page' => $page,
    'timestamp' => gmdate('c'),
]);

header('Location: ' . $method['url'], true, 302);
exit;
