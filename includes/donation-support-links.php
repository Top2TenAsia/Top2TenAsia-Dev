<?php
require_once __DIR__ . '/donation-config.php';

$settings = donation_settings();
$primary = donation_primary_method();
$paypal = donation_get_method('paypal');
$buyMeACoffee = donation_get_method('buymeacoffee');
$donationLocation = isset($donation_location) ? donation_slugify($donation_location) : 'footer';
$donationVariant = isset($donation_variant) ? donation_slugify($donation_variant) : 'control';
$donationArticle = isset($donation_article) ? donation_slugify($donation_article) : donation_current_article_slug();
$donationPage = donation_current_page_path();
$donationSource = donation_detect_source();
?>
<ul class="stats donation-link-list">
    <li><a href="<?php echo htmlspecialchars(donation_support_page_url(['source' => $donationSource])); ?>">Support us</a></li>
    <?php if ($primary && !empty($primary['url'])) : ?>
        <li>
            <a
                href="<?php echo htmlspecialchars(donation_outbound_url($primary['key'], ['location' => $donationLocation, 'variant' => $donationVariant, 'article' => $donationArticle, 'page' => $donationPage, 'source' => $donationSource])); ?>"
                class="icon solid fa-heart"
            ><?php echo htmlspecialchars($primary['label']); ?></a>
        </li>
    <?php endif; ?>
    <?php if ($paypal && !empty($paypal['url'])) : ?>
        <li>
            <a
                href="<?php echo htmlspecialchars(donation_outbound_url('paypal', ['location' => $donationLocation, 'variant' => $donationVariant, 'article' => $donationArticle, 'page' => $donationPage, 'source' => $donationSource])); ?>"
                class="icon solid fa-heart"
            >PayPal</a>
        </li>
    <?php endif; ?>
    <?php if ($buyMeACoffee && !empty($buyMeACoffee['url'])) : ?>
        <li>
            <a
                href="<?php echo htmlspecialchars(donation_outbound_url('buymeacoffee', ['location' => $donationLocation, 'variant' => $donationVariant, 'article' => $donationArticle, 'page' => $donationPage, 'source' => $donationSource])); ?>"
                class="icon solid fa-heart"
            >Buy Me a Coffee</a>
        </li>
    <?php endif; ?>
</ul>
