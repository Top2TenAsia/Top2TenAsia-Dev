<?php
$year = 2024;
$title = "Top 10 Best Korean Dramas of $year";
$slug = "best-korean-drama-$year";
$canonical = "/top10-article/$slug";
$description = "The best K-dramas of $year—from Queen of Tears and Doctor Slump to Marry My Husband and Lovely Runner. Our ranked list of the top 10 Korean dramas of $year.";
$featured_img = "assets/k-drama.png";
$list = [
    ['num' => 10, 'name' => 'Nothing Uncovered', 'sub' => '2024', 'img' => 'assets/signal.webp', 'text' => 'A thriller about a reporter and a detective digging into a serial murder case. Tense and twisty.'],
    ['num' => 9,  'name' => 'The Bequeathed', 'sub' => '2024', 'img' => 'assets/evil-flower.webp', 'text' => 'Netflix thriller about a woman who inherits a family cemetery. Dark family secrets and murder.'],
    ['num' => 8,  'name' => 'The 8 Show', 'sub' => '2024', 'img' => 'assets/robot.webp', 'text' => 'A survival game in a mysterious building. Ryu Jun-yeol leads an ensemble in this tense, satirical drama.'],
    ['num' => 7,  'name' => 'The Atypical Family', 'sub' => '2024', 'img' => 'assets/gumiho.webp', 'text' => 'A family with supernatural abilities loses their powers until a mysterious woman appears. Jang Ki-yong and Chun Woo-hee star.'],
    ['num' => 6,  'name' => 'Hierarchy', 'sub' => '2024', 'img' => 'assets/des.jpg', 'text' => 'A Netflix teen drama set in an elite high school. Romance, secrets, and social commentary.'],
    ['num' => 5,  'name' => 'The Midnight Romance in Hagwon', 'sub' => '2024', 'img' => 'assets/encounter.webp', 'text' => 'Jung Ryeo-won and Wi Ha-jun in a romance between a veteran instructor and a star teacher. Sweet and nostalgic.'],
    ['num' => 4,  'name' => 'Lovely Runner', 'sub' => '2024', 'img' => 'assets/collage (2).webp', 'text' => 'Byeon Woo-seok and Kim Hye-yoon in a time-slip romance that took the year by storm. Fandom and feels.'],
    ['num' => 3,  'name' => 'Marry My Husband', 'sub' => '2024', 'img' => 'assets/faith.webp', 'text' => 'Park Min-young gets a second chance at life and revenge. A webtoon adaptation that dominated ratings.'],
    ['num' => 2,  'name' => 'Doctor Slump', 'sub' => '2024', 'img' => 'assets/des.jpg', 'text' => 'Park Hyung-sik and Park Shin-hye as former rivals who reunite at a low point. Healing rom-com with depth.'],
    ['num' => 1,  'name' => 'Queen of Tears', 'sub' => '2024', 'img' => 'assets/encounter.webp', 'text' => 'Kim Soo-hyun and Kim Ji-won in a record-breaking romance between a chaebol heiress and her husband. The biggest K-drama of the year.'],
];
require __DIR__ . '/top10-article-template.php';
