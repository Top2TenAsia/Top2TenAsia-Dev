<?php
require_once dirname(__DIR__) . '/includes/donation-config.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$input = [];

if ($raw) {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $input = $decoded;
    }
}

if (!$input) {
    $input = $_POST;
}

$event = $input['event'] ?? '';
if ($event === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'missing_event']);
    exit;
}

$payload = [
    'source' => donation_slugify($input['source'] ?? donation_detect_source()),
    'browser' => donation_slugify($input['browser'] ?? donation_detect_browser_context()),
    'article' => donation_slugify($input['article'] ?? donation_current_article_slug()),
    'location' => donation_slugify($input['location'] ?? 'unknown'),
    'method' => donation_slugify($input['method'] ?? 'unknown'),
    'variant' => donation_slugify($input['variant'] ?? 'control'),
    'amount' => preg_replace('/[^0-9a-zA-Z_-]/', '', (string) ($input['amount'] ?? 'unknown')),
    'page' => donation_normalize_path($input['page'] ?? donation_current_page_path()),
    'timestamp' => gmdate('c'),
];

$ok = donation_record_event($event, $payload);
echo json_encode(['ok' => $ok]);
