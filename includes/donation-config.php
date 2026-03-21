<?php
if (!function_exists('base_path')) {
    require_once __DIR__ . '/config.php';
}

if (!defined('DONATION_RAZORPAY_URL')) {
    define('DONATION_RAZORPAY_URL', '');
}
if (!defined('DONATION_PAYPAL_URL')) {
    define('DONATION_PAYPAL_URL', 'https://www.paypal.me/harishpanwar1998');
}
if (!defined('DONATION_PAYTM_URL')) {
    define('DONATION_PAYTM_URL', 'https://paytm.me/4-XO7RC');
}
if (!defined('DONATION_BUYMEACOFFEE_URL')) {
    define('DONATION_BUYMEACOFFEE_URL', 'https://www.buymeacoffee.com/top2tenasia');
}
/** Set true when the article support popup is ready to show. */
if (!defined('DONATION_SUPPORT_POPUP_ENABLED')) {
    define('DONATION_SUPPORT_POPUP_ENABLED', false);
}

function donation_settings() {
    static $settings = null;

    if ($settings !== null) {
        return $settings;
    }

    $basePath = rtrim(base_path(), '/');
    $supportPage = ($basePath !== '' ? $basePath : '') . '/support-us.php';

    $methods = [
        'razorpay' => [
            'key' => 'razorpay',
            'label' => 'UPI / Cards',
            'short_label' => 'UPI',
            'description' => 'Fastest option for UPI, cards, wallets and netbanking.',
            'url' => trim((string) DONATION_RAZORPAY_URL),
            'enabled' => trim((string) DONATION_RAZORPAY_URL) !== '',
            'badge' => 'Recommended',
        ],
        'paytm' => [
            'key' => 'paytm',
            'label' => 'Paytm / UPI',
            'short_label' => 'Paytm',
            'description' => 'Simple mobile-friendly fallback for UPI-style payments.',
            'url' => trim((string) DONATION_PAYTM_URL),
            'enabled' => trim((string) DONATION_PAYTM_URL) !== '',
            'badge' => 'Quick donate',
        ],
        'paypal' => [
            'key' => 'paypal',
            'label' => 'PayPal',
            'short_label' => 'PayPal',
            'description' => 'Best fallback for international supporters.',
            'url' => trim((string) DONATION_PAYPAL_URL),
            'enabled' => trim((string) DONATION_PAYPAL_URL) !== '',
            'badge' => 'Global',
        ],
        'buymeacoffee' => [
            'key' => 'buymeacoffee',
            'label' => 'Buy Me a Coffee',
            'short_label' => 'BMC',
            'description' => 'Creator-support fallback for international readers.',
            'url' => trim((string) DONATION_BUYMEACOFFEE_URL),
            'enabled' => trim((string) DONATION_BUYMEACOFFEE_URL) !== '',
            'badge' => 'Optional',
        ],
    ];

    $primary = $methods['razorpay']['enabled'] ? 'razorpay' : ($methods['paytm']['enabled'] ? 'paytm' : 'paypal');

    $settings = [
        'currency' => 'INR',
        'amounts' => [99, 199, 499],
        'support_page' => $supportPage,
        'methods' => $methods,
        'primary_method' => $primary,
        'secondary_method' => 'paypal',
        'dismiss_days' => 7,
        'click_snooze_days' => 30,
        'popup_delay_ms' => 35000,
        'popup_scroll_threshold' => 0.8,
        'popup_scroll_threshold_b' => 1.0,
    ];

    return $settings;
}

function donation_get_method($methodKey) {
    $settings = donation_settings();
    return $settings['methods'][$methodKey] ?? null;
}

function donation_primary_method() {
    $settings = donation_settings();
    return donation_get_method($settings['primary_method']);
}

function donation_support_page_url(array $params = []) {
    $settings = donation_settings();
    if (!$params) {
        return $settings['support_page'];
    }

    return $settings['support_page'] . '?' . http_build_query($params);
}

function donation_outbound_url($methodKey, array $params = []) {
    $basePath = rtrim(base_path(), '/');
    $query = array_merge(['method' => $methodKey], $params);
    return ($basePath !== '' ? $basePath : '') . '/donate-out.php?' . http_build_query($query);
}

function donation_normalize_path($path) {
    $path = (string) $path;
    if ($path === '') {
        return '/';
    }

    $path = str_replace('\\', '/', $path);
    $path = parse_url($path, PHP_URL_PATH) ?: $path;
    $basePath = rtrim(base_path(), '/');
    if ($basePath !== '' && strpos($path, $basePath) === 0) {
        $path = substr($path, strlen($basePath)) ?: '/';
    }

    $path = '/' . ltrim($path, '/');
    return $path === '' ? '/' : $path;
}

function donation_current_page_path() {
    $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
    return donation_normalize_path($requestUri);
}

function donation_current_article_slug() {
    $path = donation_current_page_path();
    $trimmed = trim($path, '/');

    if ($trimmed === '') {
        return 'home';
    }

    $trimmed = preg_replace('#\.php$#i', '', $trimmed);
    return str_replace('/', '--', $trimmed);
}

function donation_detect_source($referrer = null) {
    if (isset($_GET['utm_source']) && $_GET['utm_source'] !== '') {
        return donation_slugify($_GET['utm_source']);
    }

    $referrer = $referrer !== null ? $referrer : ($_SERVER['HTTP_REFERER'] ?? '');
    if ($referrer === '') {
        return 'direct';
    }

    $host = strtolower((string) parse_url($referrer, PHP_URL_HOST));
    $host = preg_replace('#^www\.#', '', $host);

    if ($host === '') {
        return 'direct';
    }
    if (strpos($host, 'instagram.com') !== false || strpos($host, 'l.instagram.com') !== false) {
        return 'instagram';
    }
    if (strpos($host, 'facebook.com') !== false || strpos($host, 'm.facebook.com') !== false || strpos($host, 'lm.facebook.com') !== false) {
        return 'facebook';
    }
    if (strpos($host, 't.co') !== false || strpos($host, 'twitter.com') !== false || strpos($host, 'x.com') !== false) {
        return 'twitter';
    }
    if (strpos($host, 'google.') !== false) {
        return 'google';
    }
    if (strpos($host, 'top2tenasia.xyz') !== false) {
        return 'internal';
    }

    return donation_slugify($host);
}

function donation_detect_browser_context($userAgent = null) {
    $userAgent = strtolower((string) ($userAgent !== null ? $userAgent : ($_SERVER['HTTP_USER_AGENT'] ?? '')));

    if ($userAgent === '') {
        return 'unknown';
    }
    if (strpos($userAgent, 'instagram') !== false) {
        return 'instagram_in_app';
    }
    if (strpos($userAgent, 'fban') !== false || strpos($userAgent, 'fbav') !== false) {
        return 'facebook_in_app';
    }
    if (strpos($userAgent, 'wv') !== false || strpos($userAgent, 'webview') !== false) {
        return 'generic_webview';
    }
    if (strpos($userAgent, 'iphone') !== false || strpos($userAgent, 'ipad') !== false) {
        return 'ios_browser';
    }
    if (strpos($userAgent, 'android') !== false) {
        return 'android_browser';
    }

    return 'desktop_browser';
}

function donation_is_meta_in_app_browser($userAgent = null) {
    $context = donation_detect_browser_context($userAgent);
    return $context === 'instagram_in_app' || $context === 'facebook_in_app';
}

function donation_slugify($value) {
    $value = strtolower(trim((string) $value));
    $value = preg_replace('/[^a-z0-9]+/', '-', $value);
    $value = trim((string) $value, '-');
    return $value !== '' ? $value : 'unknown';
}

function donation_tracking_file() {
    return dirname(__DIR__) . '/article/JSON/DonationStats.json';
}

function donation_record_event($event, array $payload = []) {
    $event = donation_slugify($event);
    if ($event === 'unknown') {
        return false;
    }

    $path = donation_tracking_file();
    $dir = dirname($path);

    if (!is_dir($dir)) {
        @mkdir($dir, 0775, true);
    }

    $defaults = [
        'source' => donation_detect_source(),
        'browser' => donation_detect_browser_context(),
        'article' => donation_current_article_slug(),
        'location' => 'unknown',
        'method' => 'unknown',
        'variant' => 'control',
        'amount' => 'unknown',
        'device' => donation_detect_browser_context(),
        'page' => donation_current_page_path(),
        'timestamp' => gmdate('c'),
    ];
    $payload = array_merge($defaults, $payload);

    $fp = @fopen($path, 'c+');
    if (!$fp) {
        return false;
    }

    $ok = false;
    if (flock($fp, LOCK_EX)) {
        $raw = stream_get_contents($fp);
        $data = json_decode($raw ?: '{}', true);
        if (!is_array($data)) {
            $data = [];
        }

        if (!isset($data['events']) || !is_array($data['events'])) {
            $data['events'] = [];
        }
        if (!isset($data['totals']) || !is_array($data['totals'])) {
            $data['totals'] = [];
        }

        if (!isset($data['events'][$event]) || !is_array($data['events'][$event])) {
            $data['events'][$event] = [
                'count' => 0,
                'by_source' => [],
                'by_browser' => [],
                'by_method' => [],
                'by_location' => [],
                'by_article' => [],
                'by_variant' => [],
                'by_amount' => [],
            ];
        }

        $data['totals'][$event] = (int) ($data['totals'][$event] ?? 0) + 1;
        $data['events'][$event]['count'] = (int) $data['events'][$event]['count'] + 1;
        donation_increment_stat_bucket($data['events'][$event]['by_source'], $payload['source']);
        donation_increment_stat_bucket($data['events'][$event]['by_browser'], $payload['browser']);
        donation_increment_stat_bucket($data['events'][$event]['by_method'], $payload['method']);
        donation_increment_stat_bucket($data['events'][$event]['by_location'], $payload['location']);
        donation_increment_stat_bucket($data['events'][$event]['by_article'], $payload['article']);
        donation_increment_stat_bucket($data['events'][$event]['by_variant'], $payload['variant']);
        donation_increment_stat_bucket($data['events'][$event]['by_amount'], (string) $payload['amount']);

        $data['last_event'] = [
            'event' => $event,
            'payload' => $payload,
        ];

        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        fflush($fp);
        flock($fp, LOCK_UN);
        $ok = true;
    }

    fclose($fp);
    return $ok;
}

function donation_increment_stat_bucket(array &$bucket, $key) {
    $key = donation_slugify((string) $key);
    $bucket[$key] = (int) ($bucket[$key] ?? 0) + 1;
}
