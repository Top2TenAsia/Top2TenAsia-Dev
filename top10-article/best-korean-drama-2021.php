<?php
$year = 2021;
$title = "Top 10 Best Korean Dramas of $year";
$slug = "best-korean-drama-$year";
$canonical = "/top10-article/$slug";
$description = "The best K-dramas of $year—from Squid Game and Hometown Cha-Cha-Cha to The Red Sleeve and Vincenzo. Our ranked list of the top 10 Korean dramas to watch from $year.";
$featured_img = "assets/k-drama.png";
$list = [
    ['num' => 10, 'name' => 'Happiness', 'sub' => '2021', 'img' => 'assets/human.jpg', 'text' => 'A thriller set in a quarantined apartment complex where residents turn into "mad people." Han Hyo-joo and Park Hyung-sik star in this tense, topical drama about survival and humanity.'],
    ['num' => 9,  'name' => 'One Ordinary Day', 'sub' => '2021', 'img' => 'assets/city.jpg', 'text' => 'Kim Soo-hyun leads this crime drama about a man accused of murder after one night. A gripping adaptation that keeps viewers questioning the truth.'],
    ['num' => 8,  'name' => 'D.P.', 'sub' => '2021', 'img' => 'assets/dream.webp', 'text' => 'Netflix original about military desertion hunters. Jung Hae-in and Koo Kyo-hwan deliver a hard-hitting look at bullying and duty in the Korean army.'],
    ['num' => 7,  'name' => 'My Name', 'sub' => '2021', 'img' => 'assets/faith.webp', 'text' => 'Han So-hee stars as a woman who joins a crime ring to avenge her father. A dark, action-packed revenge drama with standout fight choreography.'],
    ['num' => 6,  'name' => 'Our Beloved Summer', 'sub' => '2021–2022', 'img' => 'assets/collage (2).webp', 'text' => 'Choi Woo-shik and Kim Da-mi reunite in front of cameras for a documentary in this nostalgic rom-com about first love and second chances.'],
    ['num' => 5,  'name' => 'The Red Sleeve', 'sub' => '2021', 'img' => 'assets/historical.webp', 'text' => 'A historical romance between a court maid and a king. Lee Jun-ho and Lee Se-young brought this sageuk to massive ratings and critical acclaim.'],
    ['num' => 4,  'name' => 'Hellbound', 'sub' => '2021', 'img' => 'assets/evil-flower.webp', 'text' => 'Yeon Sang-ho\'s Netflix series about supernatural condemnations and a cult. A dark, thought-provoking take on guilt and belief.'],
    ['num' => 3,  'name' => 'Vincenzo', 'sub' => '2021', 'img' => 'assets/vincenzo.webp', 'text' => 'Song Joong-ki plays an Italian mafia consigliere in Korea. Dark comedy, revenge, and chemistry with Jeon Yeo-been made it a global hit.'],
    ['num' => 2,  'name' => 'Hometown Cha-Cha-Cha', 'sub' => '2021', 'img' => 'assets/encounter.webp', 'text' => 'Shin Min-a and Kim Seon-ho star in this healing rom-com set in a seaside village. Warm, funny, and one of the most beloved K-dramas of the year.'],
    ['num' => 1,  'name' => 'Squid Game', 'sub' => '2021', 'img' => 'assets/signal.webp', 'text' => 'Netflix\'s global phenomenon. Lee Jung-jae leads desperate contestants in deadly children\'s games. A cultural landmark that put K-drama on the world map.'],
];
require __DIR__ . '/top10-article-template.php';
