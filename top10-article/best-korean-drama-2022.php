<?php
$year = 2022;
$title = "Top 10 Best Korean Dramas of $year";
$slug = "best-korean-drama-$year";
$canonical = "/top10-article/$slug";
$description = "The best K-dramas of $year—from Extraordinary Attorney Woo and Alchemy of Souls to The Glory and Reborn Rich. Our ranked list of the top 10 Korean dramas of $year.";
$featured_img = "assets/k-drama.png";
$list = [
    ['num' => 10, 'name' => 'Under the Queen\'s Umbrella', 'sub' => '2022', 'img' => 'assets/historical.webp', 'text' => 'Kim Hye-soo leads as a queen protecting her sons in the palace. A fusion sageuk with humor and heart that won viewers and awards.'],
    ['num' => 9,  'name' => 'Narco-Saints', 'sub' => '2022', 'img' => 'assets/crash.jpg', 'text' => 'Ha Jung-woo and Hwang Jung-min in a Netflix crime drama based on real events in Suriname. Gritty and binge-worthy.'],
    ['num' => 8,  'name' => 'Big Mouth', 'sub' => '2022', 'img' => 'assets/signal.webp', 'text' => 'Lee Jong-suk plays a lawyer mistaken for a genius conman. Mystery and twists kept audiences hooked.'],
    ['num' => 7,  'name' => 'Our Blues', 'sub' => '2022', 'img' => 'assets/encounter.webp', 'text' => 'An omnibus drama set on Jeju Island. Kim Woo-bin, Shin Min-a, and an ensemble cast in stories of life, love, and healing.'],
    ['num' => 6,  'name' => 'Twenty Five Twenty One', 'sub' => '2022', 'img' => 'assets/collage (2).webp', 'text' => 'Nam Joo-hyuk and Kim Tae-ri in a nostalgic romance set in the late 1990s. A coming-of-age story that touched millions.'],
    ['num' => 5,  'name' => 'Reborn Rich', 'sub' => '2022', 'img' => 'assets/des.jpg', 'text' => 'Song Joong-ki stars as a man who is killed and reborn into a chaebol family. Revenge, business, and family drama at full throttle.'],
    ['num' => 4,  'name' => 'The Glory', 'sub' => '2022–2023', 'img' => 'assets/evil-flower.webp', 'text' => 'Song Hye-kyo returns in a dark revenge drama about school bullying. Part 1 dropped in late 2022 and became an instant phenomenon.'],
    ['num' => 3,  'name' => 'Little Women', 'sub' => '2022', 'img' => 'assets/faith.webp', 'text' => 'Kim Go-eun, Nam Ji-hyun, and Park Ji-hu star in this thriller inspired by the classic. Money, family, and mystery in one package.'],
    ['num' => 2,  'name' => 'Alchemy of Souls', 'sub' => '2022', 'img' => 'assets/gumiho.webp', 'text' => 'Lee Jae-wook and Jung So-min in a fantasy romance about souls and sorcery. Stunning visuals and a devoted fandom.'],
    ['num' => 1,  'name' => 'Extraordinary Attorney Woo', 'sub' => '2022', 'img' => 'assets/robot.webp', 'text' => 'Park Eun-bin plays a brilliant lawyer on the autism spectrum. Heartwarming, funny, and a massive hit in Korea and worldwide.'],
];
require __DIR__ . '/top10-article-template.php';
