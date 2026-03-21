<?php
if (!function_exists('base_path')) {
	require_once __DIR__ . '/../includes/config.php';
}

/**
 * Normalize path for comparison (strip base, trailing slash, .php).
 */
function mini_post_normalize_path($path) {
	$path = rtrim((string) $path, '/');
	if ($path === '') {
		return '/';
	}
	$path = preg_replace('#\.php$#i', '', $path);
	return strtolower($path);
}

/**
 * True if $href points to the page currently being viewed.
 */
function mini_post_is_current_url($href) {
	$bp = rtrim(base_path(), '/');
	$req = $_SERVER['REQUEST_URI'] ?? '';
	$path = parse_url($req, PHP_URL_PATH);
	if ($path === null || $path === false) {
		$path = '';
	}
	if ($bp !== '' && strpos($path, $bp) === 0) {
		$path = substr($path, strlen($bp)) ?: '/';
	}
	$current = mini_post_normalize_path($path);

	$hpath = parse_url($href, PHP_URL_PATH);
	if ($hpath === null || $hpath === false || $hpath === '') {
		$hpath = $href;
	}
	if ($bp !== '' && strpos($hpath, $bp) === 0) {
		$hpath = substr($hpath, strlen($bp)) ?: '/';
	}
	$target = mini_post_normalize_path($hpath);

	return $current === $target;
}

$bp = rtrim(base_path(), '/');
$href_actresses = $bp . '/top-10-most-followed-kdrama-actresses-on-instagram';
$href_actors    = $bp . '/top-10-most-followed-kdrama-actors-on-instagram';

$show_actresses = !mini_post_is_current_url($href_actresses);
$show_actors    = !mini_post_is_current_url($href_actors);

if (!$show_actresses && !$show_actors) {
	return;
}
?>
<!-- Mini Posts: Top 10 Instagram lists only (current page excluded) -->
							<section class="related-articles-section">
							    <h2 class="related-articles-heading">Top 10 Instagram lists</h2>
								<div class="mini-posts">
<?php if ($show_actresses) : ?>
										<article class="mini-post">
											<header>
												<h3><a href="<?php echo htmlspecialchars($href_actresses); ?>">Top 10 Most Followed K-Drama Actresses On Instagram</a></h3>
												<time class="published" datetime="2026-03-16">Mar 16, 2026</time>
												<a href="https://www.instagram.com/top2ten.asia" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<a href="<?php echo htmlspecialchars($href_actresses); ?>" class="image"><img src="assets/top-10-list/most-followed-actresses.webp" alt="Top 10 most followed K-drama actresses on Instagram" /></a>
										</article>
<?php endif; ?>
<?php if ($show_actors) : ?>
										<article class="mini-post">
											<header>
												<h3><a href="<?php echo htmlspecialchars($href_actors); ?>">Top 10 Most Followed K-Drama Actors On Instagram</a></h3>
												<time class="published" datetime="2026-03-16">Mar 16, 2026</time>
												<a href="https://www.instagram.com/top2ten.asia" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<a href="<?php echo htmlspecialchars($href_actors); ?>" class="image"><img src="../assets/top 10 most followed kdrama actors on instagram.webp" alt="Top 10 most followed K-drama actors on Instagram" /></a>
										</article>
<?php endif; ?>
								</div>
							</section>
