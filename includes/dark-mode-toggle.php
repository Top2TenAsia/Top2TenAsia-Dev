<?php
/**
 * Night Read / Dark Mode toggle.
 * Single toggle: sun (light) or moon (dark), yellow sun / light blue moon.
 */
if (!defined('BASE_PATH')) {
    require_once __DIR__ . '/config.php';
}
?>
<li class="night-read-wrap">
    <button type="button" class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle light or night mode" title="Toggle theme">
        <span class="theme-toggle-icon theme-sun" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41zm1.41-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.41 1.41c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.41-1.41zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.41 1.41c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.41-1.41z"/></svg></span>
        <span class="theme-toggle-icon theme-moon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/></svg></span>
    </button>
</li>
<script>
(function() {
    var KEY = 'night-read';
    function setTheme(dark) {
        if (dark) document.body.classList.add('night-read');
        else document.body.classList.remove('night-read');
        try { localStorage.setItem(KEY, dark ? '1' : '0'); } catch (e) {}
    }
    try { if (localStorage.getItem(KEY) === '1') document.body.classList.add('night-read'); } catch (e) {}
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('theme-toggle');
        if (btn) btn.addEventListener('click', function() {
            var dark = document.body.classList.toggle('night-read');
            setTheme(dark);
        });
    });
})();
</script>
