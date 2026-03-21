$root = Join-Path $PSScriptRoot '..'
Get-ChildItem $root -Filter '*.php' -File | ForEach-Object {
    $p = $_.FullName
    $c = [IO.File]::ReadAllText($p)
    if ($c -notmatch "include 'mini-post.php'") { return }
    if ($c -match 'single-article-layout-start') { return }
    $c2 = $c -replace '(<\?php\s+include\s+''header\.php'';\s*\?>)', "`$1`r`n<?php include __DIR__ . '/includes/single-article-layout-start.php'; ?>"
    $c2 = $c2 -replace '(<\?php\s+include\s+''mini-post\.php'';\s*\?>)', "<?php include __DIR__ . '/includes/single-article-layout-split.php'; ?>`r`n`$1`r`n<?php include __DIR__ . '/includes/single-article-layout-end.php'; ?>"
    if ($c2 -ne $c) {
        [IO.File]::WriteAllText($p, $c2)
        Write-Output "Updated: $($_.Name)"
    }
}
