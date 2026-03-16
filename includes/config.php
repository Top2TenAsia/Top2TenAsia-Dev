<?php
/**
 * Site config - single place for base URL and base path.
 * Change SITE_BASE_URL here when moving to staging or another domain.
 * Use site_url() for canonical and og:url in PHP; internal links use base_path() so they work in subfolders (e.g. local /Top2TenAsia-Dev/).
 */
if (!defined('SITE_BASE_URL')) {
    define('SITE_BASE_URL', 'https://www.top2tenasia.xyz');
}

/**
 * Base path for internal links (empty on production, /Top2TenAsia-Dev when running locally in that folder).
 * Prevents links from "skipping" the project folder when opened as https://localhost/Top2TenAsia-Dev/
 */
// Uncomment next line to force base path for local dev if links still skip the folder:
// define('BASE_PATH', '/Top2TenAsia-Dev');
if (!defined('BASE_PATH')) {
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $is_production = (strpos($host, 'top2tenasia.xyz') !== false);
    $uri = $_SERVER['REQUEST_URI'] ?? $_SERVER['SCRIPT_NAME'] ?? $_SERVER['PHP_SELF'] ?? '';
    $uri = str_replace('\\', '/', $uri);
    $scriptDir = str_replace('\\', '/', __DIR__);
    $in_subfolder = (strpos($uri, '/Top2TenAsia-Dev') !== false)
        || (stripos($scriptDir, 'Top2TenAsia-Dev') !== false && (strpos($host, 'localhost') !== false || strpos($host, '127.0.0.1') !== false));
    define('BASE_PATH', (!$is_production && $in_subfolder) ? '/Top2TenAsia-Dev' : '');
}

/**
 * Echo-safe base path for href and src (always starts with / or is empty).
 * Usage: <a href="<?php echo base_path(); ?>/">Home</a>
 */
function base_path() {
    return defined('BASE_PATH') ? BASE_PATH : '';
}

/**
 * Absolute URL for a path (for meta tags, canonical, og:url).
 * @param string $path Root-relative path, e.g. /article/foo or /top-10-lists
 * @return string
 */
function site_url($path = '') {
    $path = ltrim($path, '/');
    return rtrim(SITE_BASE_URL, '/') . ($path ? '/' . $path : '');
}