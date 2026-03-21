<?php
require_once dirname(__DIR__, 2) . '/includes/donation-config.php';

$supportUrl = donation_support_page_url(['source' => donation_detect_source()]);
?>
<div class="donation-sheet-backdrop" data-donation-backdrop hidden></div>
<section
    class="donation-sheet donation-sheet--compact"
    data-donation-popup
    data-support-url="<?php echo htmlspecialchars($supportUrl); ?>"
    hidden
    aria-hidden="true"
    aria-label="Support Top2Ten Asia"
>
    <button type="button" class="donation-sheet__close" aria-label="Close popup" data-donation-close>&times;</button>
    <span class="donation-sheet__eyebrow">Support Top2Ten Asia</span>
    <h3 class="donation-sheet__title">Enjoyed reading this article?</h3>
    <p class="donation-sheet__copy">
        If you want to help us publish more fast K-drama and K-pop updates, your support would mean a lot to us.
    </p>
    <div class="donation-sheet__footer donation-sheet__footer--center">
        <a href="<?php echo htmlspecialchars($supportUrl); ?>" class="button primary donation-sheet__yes-btn" data-donation-yes>Yes</a>
        <button type="button" class="donation-sheet__no-btn" data-donation-close>No</button>
    </div>
</section>
