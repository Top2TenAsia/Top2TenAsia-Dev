<?php
if (!isset($year) || !isset($title) || !isset($slug) || !isset($list)) {
    header('HTTP/1.0 404 Not Found');
    exit;
}
$canonical = $canonical ?? "/top10-article/$slug";
$description = $description ?? "The best K-dramas of $year—our ranked list of the top 10 Korean dramas to watch.";
$featured_img = $featured_img ?? 'assets/k-drama.png';
$base = __DIR__ . '/..';
require_once $base . '/includes/config.php';
$full_url = rtrim(SITE_BASE_URL, '/') . base_path() . $canonical;
$og_image = rtrim(SITE_BASE_URL, '/') . '/' . ltrim($featured_img, '/');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160757768-2"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-160757768-2');</script>
    <script data-ad-client="ca-pub-2272028859368526" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <title><?php echo htmlspecialchars($title); ?> [Highly Recommended]</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="<?php echo base_path(); ?>/article/assets/css/main.css" />
    <script>window.BASE_PATH = '<?php echo addslashes(base_path()); ?>';</script>
    <script src="<?php echo base_path(); ?>/mainScript.js"></script>
    <meta property="og:site_name" content="Top2Ten Asia" />
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta property="og:url" content="<?php echo htmlspecialchars($full_url); ?>" />
    <meta property="og:image" content="<?php echo htmlspecialchars($og_image); ?>" />
    <link rel="canonical" href="<?php echo base_path(), htmlspecialchars($canonical); ?>" />
    <meta name="description" content="<?php echo htmlspecialchars($description); ?>">
    <meta name="keywords" content="best Korean drama <?php echo (int)$year; ?>, top 10 K-drama <?php echo (int)$year; ?>, best K-drama <?php echo (int)$year; ?>, Korean drama <?php echo (int)$year; ?>, must watch K-drama <?php echo (int)$year; ?>">
    <meta name="owner" content="Harish Panwar">
    <style>
        .post.top10-year .content-section h3 { font-family: "Raleway", Helvetica, sans-serif; font-weight: 800; color: #FF5733; font-size: 1.05em; letter-spacing: 0.02em; line-height: 1.4; text-transform: none; }
        .post.top10-year .content-section .image.featured { text-align: center; }
        .post.top10-year .content-section .image.featured img { width: 100%; max-width: 420px; height: auto; border-radius: 12px; object-fit: cover; margin: 0 auto 1em; display: block; box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
        .post.top10-year .intro-section h3 { font-family: "Raleway", Helvetica, sans-serif; font-weight: 800; color: #3c3b3b; }
    </style>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_path(); ?>/assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_path(); ?>/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_path(); ?>/assets/favicon-16x16.png">
</head>
<body class="is-preload">
    <div id="wrapper">
        <?php include $base . '/article/header.php'; ?>
        <div id="main_other">
            <article class="post top10-year">
                <header>
                    <div class="title">
                        <h2><a href="#"><?php echo htmlspecialchars($title); ?></a></h2>
                        <p>Top 10 List: Best K-Drama of <?php echo (int)$year; ?></p>
                    </div>
                    <div class="meta">
                        <time class="published" datetime="<?php echo (int)$year; ?>-12-31"><?php echo (int)$year; ?></time>
                        <a href="https://www.instagram.com/top2ten.asia" class="author"><span class="name">Top2Ten Asia</span><img src="<?php echo base_path(); ?>/article/images/avatar.jpg" alt="" /></a>
                    </div>
                </header>
                <?php $article_slug = $slug; include $base . '/includes/article-views.php'; include $base . '/includes/article-stats-bar.php'; ?>
                <span class="image featured"><img src="<?php echo base_path(); ?>/<?php echo htmlspecialchars($featured_img); ?>" alt="<?php echo htmlspecialchars($title); ?>" /></span>
                <div class="content-ads">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272028859368526" crossorigin="anonymous"></script>
                    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2272028859368526" data-ad-slot="7971452142" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
                <div class="intro-section">
                    <p>Korean dramas in <?php echo (int)$year; ?> gave us unforgettable stories, from record-breaking hits to underrated gems. This list ranks the <strong>top 10 best K-dramas of <?php echo (int)$year; ?></strong> based on ratings, impact, and audience love.</p>
                    <p>Whether you're catching up or rewatching, here are the dramas that defined <?php echo (int)$year; ?>—with a short note on why each one made the list. Use it as your watchlist and enjoy.</p>
                </div>
                <?php
                $ad_positions = [3, 6];
                foreach ($list as $i => $item):
                    $num = $item['num'];
                    $name = $item['name'];
                    $sub = $item['sub'] ?? '';
                    $img = $item['img'] ?? $featured_img;
                    $text = $item['text'] ?? '';
                    $img_src = (strpos($img, '/') === 0 || strpos($img, 'http') === 0) ? $img : base_path() . '/' . $img;
                    if ($i > 0 && in_array($num, $ad_positions)): ?>
                <div class="content-ads">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272028859368526" crossorigin="anonymous"></script>
                    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2272028859368526" data-ad-slot="6466798782" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
                <?php endif; ?>
                <div class="content-section">
                    <h3><?php echo (int)$num; ?>. <?php echo htmlspecialchars($name); ?><?php if ($sub) echo ' (' . htmlspecialchars($sub) . ')'; ?></h3>
                    <p class="image featured"><img src="<?php echo $img_src; ?>" alt="<?php echo htmlspecialchars($name); ?>" /></p>
                    <p><?php echo $text; ?></p>
                </div>
                <?php endforeach; ?>
                <div class="intro-section" style="margin-top:2em;">
                    <h3>More Top 10 Lists</h3>
                    <p>Explore our other <a href="<?php echo base_path(); ?>/top-10-lists">Top 10 K-Drama lists</a> for the best by genre, year, and platform. Stay tuned to Top2Ten Asia for more recommendations and K-drama news.</p>
                </div>
                <div class="content-ads">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272028859368526" crossorigin="anonymous"></script>
                    <ins class="adsbygoogle" style="display:block" data-ad-format="auto" data-ad-client="ca-pub-2272028859368526" data-ad-slot="8842870052" data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
                <footer>
                    <?php
                    $donation_location = 'top10_article_footer';
                    $donation_article = $slug;
                    include $base . '/includes/donation-support-links.php';
                    ?>
                </footer>
            </article>
        </div>
        <section id="sidebar">
            <section><h2>Trending<i class="fa fa-fire trendingIcon" aria-hidden="true"></i></h2><div class="mini-posts"></div></section>
            <section><h2>Top 10 List</h2><ul class="posts"></ul></section>
            <section class="blurb">
                <h2>About</h2>
                <p>Top2Ten Asia is a Korean entertainment media website providing complete coverage of Korean Drama and pop culture. Founded on March 21, 2020.</p>
                <ul class="actions"><li><a href="#" class="button">Learn More</a></li></ul>
            </section>
            <section id="footer">
                <ul class="icons">
                    <li><a href="https://twitter.com/top2tenasia" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/top2ten.asia/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/top2ten.asia/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                </ul>
                <p class="copyright">&copy; top2tenasia 2025.</p>
            </section>
        </section>
    </div>
    <script src="<?php echo base_path(); ?>/article/assets/js/jquery.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/browser.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/breakpoints.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/util.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/main.js"></script>
</body>
</html>
