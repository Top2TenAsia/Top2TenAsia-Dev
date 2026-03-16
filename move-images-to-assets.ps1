# Move root-level image files into assets/ and rename koi-fish (3).png to koi-fish.png
# Run from project root: powershell -ExecutionPolicy Bypass -File move-images-to-assets.ps1

$root = $PSScriptRoot
$assets = Join-Path $root "assets"
$extensions = @("*.png", "*.jpg", "*.jpeg", "*.gif", "*.webp")

if (-not (Test-Path $assets)) { New-Item -ItemType Directory -Path $assets | Out-Null }

foreach ($ext in $extensions) {
    Get-ChildItem -Path $root -Filter $ext -File -ErrorAction SilentlyContinue | ForEach-Object {
        $dest = Join-Path $assets $_.Name
        if ($_.Name -match "koi-fish\s*\(3\)\.png") {
            $dest = Join-Path $assets "koi-fish.png"
        }
        if (-not (Test-Path $dest) -or (Get-Item $dest).Length -ne $_.Length) {
            Copy-Item -Path $_.FullName -Destination $dest -Force
            Write-Host "Copied: $($_.Name) -> assets/"
        }
        Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
        Write-Host "Removed from root: $($_.Name)"
    }
}
Write-Host "Done. Root images moved to assets/."
