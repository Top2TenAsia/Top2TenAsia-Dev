<?php
require_once __DIR__ . '/includes/donation-config.php';

$settings = donation_settings();
$primary = donation_primary_method();
$methods = array_filter($settings['methods'], static function ($method) {
    return !empty($method['url']);
});
$amounts = $settings['amounts'];
$source = donation_detect_source();
$pagePath = donation_current_page_path();
$articleSlug = donation_current_article_slug();
$notice = $_GET['setup'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160757768-2"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-160757768-2');</script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <title>Support Top2Ten Asia</title>
    <meta name="description" content="Support Top2Ten Asia with a quick one-time donation using the easiest payment method for you." />
    <link rel="stylesheet" href="<?php echo base_path(); ?>/article/assets/css/main.css" />
</head>
<body class="single is-preload">
    <div id="wrapper">
        <?php include __DIR__ . '/article/header.php'; ?>
        <div id="main_other">
            <article class="post">
                <header>
                    <div class="title">
                        <h2><a href="#">Support Top2Ten Asia</a></h2>
                        <p>Quick one-time donations for readers around the world</p>
                    </div>
                    <div class="meta">
                        <time class="published" datetime="<?php echo gmdate('Y-m-d'); ?>"><?php echo gmdate('M d, Y'); ?></time>
                        <a href="https://www.instagram.com/top2ten.asia" class="author"><span class="name">Top2Ten Asia</span><img src="<?php echo base_path(); ?>/article/images/avatar.jpg" alt="" /></a>
                    </div>
                </header>

                <?php if ($notice === 'payment-method-missing') : ?>
                    <p class="donation-support-notice">Your preferred donation method is not configured yet. Please choose another option below.</p>
                <?php endif; ?>

                <p>If our K-pop and K-drama coverage helps you, a small donation helps us keep publishing fast updates, maintain the site, and stay independent.</p>
                <p>This page is optimized for mobile readers, including visitors coming from Instagram and Facebook in-app browsers.</p>

                <section
                    class="donation-support-page"
                    data-donation-support-page
                    data-source="<?php echo htmlspecialchars($source); ?>"
                    data-page="<?php echo htmlspecialchars($pagePath); ?>"
                    data-article="<?php echo htmlspecialchars($articleSlug); ?>"
                >
                    <div class="donation-support-page__amounts">
                        <?php foreach ($amounts as $index => $amount) : ?>
                            <button type="button" class="donation-sheet__amount-btn<?php echo $index === 0 ? ' is-selected' : ''; ?>" data-donation-select-amount="<?php echo (int) $amount; ?>">Rs<?php echo (int) $amount; ?></button>
                        <?php endforeach; ?>
                        <button type="button" class="donation-sheet__amount-btn" data-donation-select-amount="custom">Custom</button>
                    </div>

                    <div class="donation-support-page__grid">
                        <?php foreach ($methods as $method) : ?>
                            <a
                                href="<?php echo htmlspecialchars(donation_outbound_url($method['key'], ['amount' => $amounts[0], 'location' => 'support_page', 'variant' => 'control', 'article' => $articleSlug, 'page' => $pagePath, 'source' => $source])); ?>"
                                class="donation-method-card<?php echo $primary && $method['key'] === $primary['key'] ? ' is-primary' : ''; ?>"
                                data-donation-link
                                data-method="<?php echo htmlspecialchars($method['key']); ?>"
                                data-amount="<?php echo (int) $amounts[0]; ?>"
                                data-location="support_page"
                            >
                                <span class="donation-method-card__top">
                                    <span class="donation-method-card__label"><?php echo htmlspecialchars($method['label']); ?></span>
                                    <span class="donation-method-card__badge"><?php echo htmlspecialchars($method['badge']); ?></span>
                                </span>
                                <span class="donation-method-card__text"><?php echo htmlspecialchars($method['description']); ?></span>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </section>

                <footer>
                    <?php
                    $donation_location = 'support_page_footer';
                    $donation_article = $articleSlug;
                    include __DIR__ . '/includes/donation-support-links.php';
                    ?>
                </footer>
            </article>
        </div>

        <section id="footer">
            <ul class="icons">
                <li><a href="https://twitter.com/top2tenasia" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/top2ten.asia/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/top2ten.asia" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="mailto:top2tenasia@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <p class="copyright">&copy; <a href="#">Top2Ten Asia 2026</a>.</p>
        </section>
    </div>

    <script src="<?php echo base_path(); ?>/article/assets/js/jquery.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/browser.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/breakpoints.min.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/util.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/main.js"></script>
    <script src="<?php echo base_path(); ?>/article/assets/js/donation.js"></script>
</body>
</html>
