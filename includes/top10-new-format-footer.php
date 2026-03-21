            <div class="content-ads">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272028859368526" crossorigin="anonymous"></script>
                <ins class="adsbygoogle" style="display:block" data-ad-format="auto" data-ad-client="ca-pub-2272028859368526" data-ad-slot="8842870052" data-full-width-responsive="true"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <footer>
                <?php
                $donation_location = 'top10_new_format_footer';
                $donation_article = isset($top10_slug) ? $top10_slug : donation_current_article_slug();
                include __DIR__ . '/donation-support-links.php';
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
