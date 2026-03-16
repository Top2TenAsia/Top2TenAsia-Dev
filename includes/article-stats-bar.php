<?php
/**
 * Article stats bar: view count + reactions (Like, Love).
 * Requires $article_slug to be set before including.
 * Reads from article/JSON/Stats.json (frontend-first; backend will increment later).
 */
if (!isset($article_slug) || $article_slug === '') {
    return;
}
if (!function_exists('base_path')) {
    require_once dirname(__DIR__) . '/includes/config.php';
}
$stats_path = dirname(__DIR__) . '/article/JSON/Stats.json';
$view_count = 0;
$like_count = 0;
$love_count = 0;
if (file_exists($stats_path)) {
    $json = @json_decode(file_get_contents($stats_path), true);
    if (is_array($json) && isset($json[$article_slug])) {
        $view_count = (int) ($json[$article_slug]['views'] ?? 0);
        $like_count = (int) ($json[$article_slug]['like'] ?? 0);
        $love_count = (int) ($json[$article_slug]['love'] ?? 0);
    }
}
$base = function_exists('base_path') ? base_path() : '';
$formatted_views = $view_count >= 1000 ? (round($view_count / 1000, 1) . 'k') : (string) $view_count;
?>
<style>
.article-stats-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5em;padding:0.4em 0;margin-bottom:0.5em;font-size:0.9em}
.article-stats-bar .article-stats-views{color:#666}
.article-stats-bar .article-stats-views i{margin-right:0.2em;opacity:0.8}
.article-stats-reactions{display:flex;align-items:center;gap:0.5em;margin-left:auto}
.article-reaction-btn{display:inline-flex;align-items:center;gap:0.3em;padding:0.25em 0.45em;background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:1em;font-weight:500;transition:background 0.15s ease, color 0.15s ease;color:#999}
.article-reaction-btn:hover:not(.reacted){background:rgba(0,0,0,0.05)}
.article-reaction-btn .article-reaction-icon{display:inline-flex;align-items:center;justify-content:center;width:1.4em;height:1.4em;flex-shrink:0}
.article-reaction-btn .article-reaction-icon svg{width:100%;height:100%;display:block}
.article-reaction-btn[data-reaction="like"]:not(.reacted){color:#999}
.article-reaction-btn[data-reaction="like"]:not(.reacted):hover{color:#1877f2;background:rgba(24,119,242,0.1)}
.article-reaction-btn[data-reaction="like"].reacted{color:#1877f2!important}
.article-reaction-btn[data-reaction="like"].reacted .article-reaction-icon svg{fill:#1877f2!important}
.article-reaction-btn[data-reaction="like"] .article-reaction-icon svg{fill:currentColor}
.article-reaction-btn[data-reaction="love"]:not(.reacted){color:#999}
.article-reaction-btn[data-reaction="love"]:not(.reacted):hover{color:#e53935;background:rgba(229,57,53,0.1)}
.article-reaction-btn[data-reaction="love"].reacted{color:#e53935!important}
.article-reaction-btn[data-reaction="love"].reacted .article-reaction-icon svg{fill:#e53935!important}
.article-reaction-btn[data-reaction="love"] .article-reaction-icon svg{fill:currentColor}
.article-reaction-btn.reacted{cursor:pointer}
</style>
<div class="article-stats-bar" data-article-slug="<?php echo htmlspecialchars($article_slug); ?>" data-base-path="<?php echo htmlspecialchars($base); ?>">
    <span class="article-stats-views"><i class="fa fa-eye" aria-hidden="true"></i> <span class="article-stat-num"><?php echo htmlspecialchars($formatted_views); ?></span> views</span>
    <div class="article-stats-reactions">
        <button type="button" class="article-reaction-btn" data-reaction="like" aria-label="Like">
            <span class="article-reaction-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg></span>
            <span class="article-stat-num"><?php echo $like_count; ?></span>
        </button>
        <button type="button" class="article-reaction-btn" data-reaction="love" aria-label="Love">
            <span class="article-reaction-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span>
            <span class="article-stat-num"><?php echo $love_count; ?></span>
        </button>
    </div>
</div>
<script>
(function() {
    var bar = document.querySelector('.article-stats-bar');
    if (!bar) return;
    var slug = bar.getAttribute('data-article-slug');
    var base = bar.getAttribute('data-base-path') || '';
    var cookieName = 'r_' + slug.replace(/[^a-zA-Z0-9-]/g, '_').substring(0, 40);

    function getReactionCookie() {
        var m = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        return m ? m[2] : null;
    }
    function setReactionCookie(reaction) {
        document.cookie = cookieName + '=' + reaction + ';path=/;max-age=31536000;samesite=lax';
    }

    function clearReactionCookie() {
        document.cookie = cookieName + '=;path=/;max-age=0;samesite=lax';
    }

    var current = getReactionCookie();
    bar.querySelectorAll('.article-reaction-btn').forEach(function(btn) {
        if (btn.getAttribute('data-reaction') === current) btn.classList.add('reacted');
        btn.addEventListener('click', function() {
            var reaction = this.getAttribute('data-reaction');
            var isRemoving = this.classList.contains('reacted');
            var url = base + (base ? '/' : '') + 'api/reaction.php';
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'article=' + encodeURIComponent(slug) + '&reaction=' + encodeURIComponent(reaction) + (isRemoving ? '&remove=1' : '')
            }).then(function(r) { return r.json(); }).then(function(data) {
                if (data && typeof data.like === 'number' && typeof data.love === 'number') {
                    bar.querySelectorAll('.article-reaction-btn').forEach(function(b) {
                        b.classList.remove('reacted');
                        var num = b.querySelector('.article-stat-num');
                        if (num) num.textContent = b.getAttribute('data-reaction') === 'like' ? data.like : data.love;
                    });
                    if (!isRemoving) {
                        this.classList.add('reacted');
                        setReactionCookie(reaction);
                    } else {
                        clearReactionCookie();
                    }
                }
            }.bind(this)).catch(function() {});
        });
    });
})();
</script>
