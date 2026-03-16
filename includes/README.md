# Top2Ten Asia – shared includes

## config.php
- **SITE_BASE_URL** – Production domain (used for canonicals, og:url).
- **BASE_PATH** – Path prefix for local dev (e.g. `/Top2TenAsia-Dev`) so links work when the site runs in a subfolder. Empty on production.
- **base_path()** – Use in PHP for internal links and asset URLs: `href="<?php echo base_path(); ?>/top-10-lists"`.
- **site_url($path)** – Use for absolute URLs (canonical, og:url): `site_url('article/foo')`.

## css/shared-nav.css
Shared styles for header and footer: gradient (#grad), mobile/desktop toggle (.mob, .comp), nav list (ul, li, li a). Keeps header.php and footer.php from duplicating the same CSS.
