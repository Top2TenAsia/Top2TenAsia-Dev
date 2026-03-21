<?php
/**
 * Closes the main column and opens the related-articles sidebar.
 * Include immediately before mini-post.php (after in-article ads).
 */
?>
<?php
require_once dirname(__DIR__, 2) . '/includes/donation-config.php';
if (DONATION_SUPPORT_POPUP_ENABLED) {
    include __DIR__ . '/donation-panel.php';
    ?>
<script src="<?php echo base_path(); ?>/article/assets/js/donation.js"></script>
    <?php
}
?>
</div><!-- .single-article-main -->
<aside class="article-related-sidebar" aria-label="Related articles">
