					<?php if (!function_exists('base_path')) { require_once __DIR__ . '/../includes/config.php'; } ?>
					<header id="header">
					    <h1><a href="<?php echo base_path(); ?>/">Top2Ten Asia</a></h1>
					    <nav class="links">
					        <ul>
					            <li><a href="<?php echo base_path(); ?>/">Trending <i class="fa fa-fire trendingIcon"
					                        aria-hidden="true"></i></a> </li>
					            <li><a href="<?php echo base_path(); ?>/top-10-lists">Top 10 List</a></li>
					            <li><a href="<?php echo base_path(); ?>/about us">About us</a></li>
					        </ul>
					    </nav>
					    <nav class="main">
					        <ul>
					            <?php include __DIR__ . '/../includes/dark-mode-toggle.php'; ?>
					            <li class="menu">
					                <a class="fa fa-bars" href="#menu" aria-label="Open menu"></a>
					            </li>
					        </ul>
					    </nav>
					</header>

					<!-- Menu -->
					<section id="menu">
					    <a href="#menu" class="menu-close" aria-label="Close menu"><i class="fa fa-times"></i></a>
					    <!-- Links -->
					    <section>
					        <ul class="links">
					            <li><a href="<?php echo base_path(); ?>/">Trending <i class="fa fa-fire trendingIcon" aria-hidden="true"></i></a></li>
					            <li><a href="<?php echo base_path(); ?>/top-10-lists">Top 10 List</a></li>
					            <li><a href="<?php echo base_path(); ?>/about us">About us</a></li>
					        </ul>
					    </section>
					</section>