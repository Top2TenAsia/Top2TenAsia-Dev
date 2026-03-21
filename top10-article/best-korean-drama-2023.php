<?php
$year = 2023;
$title = "Top 10 Best Korean Dramas of $year";
$slug = "best-korean-drama-$year";
$canonical = "/top10-article/$slug";
$description = "The best K-dramas of $year—from The Glory Part 2 and Crash Course in Romance to Doctor Cha and King the Land. Our ranked list of the top 10 Korean dramas of $year.";
$featured_img = "assets/k-drama.png";
$list = [
    ['num' => 10, 'name' => 'Welcome to Samdalri', 'sub' => '2023–2024', 'img' => 'assets/encounter.webp', 'text' => 'Ji Chang-wook and Shin Hye-sun reunite in a healing romance set in a seaside village. Warm and comforting.'],
    ['num' => 9,  'name' => 'My Demon', 'sub' => '2023–2024', 'img' => 'assets/gumiho.webp', 'text' => 'Kim Yoo-jung and Song Kang in a fantasy rom-com about a demon who loses his powers and a cynical heiress.'],
    ['num' => 8,  'name' => 'Twinkling Watermelon', 'sub' => '2023', 'img' => 'assets/collage (2).webp', 'text' => 'A time-slip drama about a CODA teen who travels to the past. Music, family, and youth in a touching package.'],
    ['num' => 7,  'name' => 'Daily Dose of Sunshine', 'sub' => '2023', 'img' => 'assets/encounter.webp', 'text' => 'Park Bo-young plays a nurse in a psychiatric ward. A sensitive, uplifting drama about mental health.'],
    ['num' => 6,  'name' => 'Celebrity', 'sub' => '2023', 'img' => 'assets/robot.webp', 'text' => 'Park Gyu-young stars in this Netflix series about fame and social media. Glossy, dark, and addictive.'],
    ['num' => 5,  'name' => 'King the Land', 'sub' => '2023', 'img' => 'assets/encounter.webp', 'text' => 'Lee Jun-ho and Im Yoon-ah in a fluffy rom-com between a chaebol heir and a hotel employee. Pure escapism.'],
    ['num' => 4,  'name' => 'The Good Bad Mother', 'sub' => '2023', 'img' => 'assets/faith.webp', 'text' => 'Ra Mi-ran and Lee Do-hyun in a touching story of family and second chances. Laughter and tears in equal measure.'],
    ['num' => 3,  'name' => 'Doctor Cha', 'sub' => '2023', 'img' => 'assets/des.jpg', 'text' => 'Uhm Jung-hwa returns to residency after 20 years. A refreshing medical comedy-drama that topped ratings.'],
    ['num' => 2,  'name' => 'Crash Course in Romance', 'sub' => '2023', 'img' => 'assets/collage (2).webp', 'text' => 'Jeon Do-yeon and Jung Kyung-ho in a romance between a former athlete and a math instructor. Chemistry and comedy.'],
    ['num' => 1,  'name' => 'The Glory (Part 2)', 'sub' => '2023', 'img' => 'assets/evil-flower.webp', 'text' => 'The conclusion of Song Hye-kyo\'s revenge saga. One of the most talked-about K-dramas of the year, with satisfying payoff.'],
];
require __DIR__ . '/top10-article-template.php';
