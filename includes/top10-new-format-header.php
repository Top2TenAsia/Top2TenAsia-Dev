<?php
/**
 * New-format Top 10 list: open wrapper and main, output article header and optional featured image + first ad.
 * Expects: $top10_title, $top10_subtitle, $top10_slug, $top10_date, $top10_featured_img, $top10_description (optional)
 * Include after setting those. Then output intro-section and content-sections. End with includes/top10-new-format-footer.php
 */
if (!isset($top10_title) || !isset($top10_slug)) return;
$top10_subtitle = $top10_subtitle ?? 'Top 10 List';
$top10_date = $top10_date ?? date('M j, Y');
$top10_featured_img = $top10_featured_img ?? 'assets/k-drama.png';
$top10_description = $top10_description ?? '';
?>
<div id="wrapper">
    <?php include __DIR__ . '/../article/header.php'; ?>
    <div id="main_other">
        <article class="post top10-list-format">
            <header>
                <div class="title">
                    <h2><a href="#"><?php echo htmlspecialchars($top10_title); ?></a></h2>
                    <p><?php echo htmlspecialchars($top10_subtitle); ?></p>
                </div>
                <div class="meta">
                    <time class="published" datetime="<?php echo date('Y-m-d', strtotime($top10_date)); ?>"><?php echo htmlspecialchars($top10_date); ?></time>
                    <a href="https://www.instagram.com/top2ten.asia" class="author"><span class="name">Top2Ten Asia</span><img src="<?php echo base_path(); ?>/article/images/avatar.jpg" alt="" /></a>
                </div>
            </header>
            <?php $article_slug = $top10_slug; include __DIR__ . '/article-views.php'; include __DIR__ . '/article-stats-bar.php'; ?>
            <span class="image featured"><img src="<?php echo base_path(); ?>/<?php echo htmlspecialchars($top10_featured_img); ?>" alt="<?php echo htmlspecialchars($top10_title); ?>" /></span>
            <div class="content-ads">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272028859368526" crossorigin="anonymous"></script>
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2272028859368526" data-ad-slot="7971452142" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
