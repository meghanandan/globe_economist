Add-Type -AssemblyName System.Drawing

$srcPath = "D:\AI-Ideas\Globe_Economist\public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

# Let's inspect coordinates:
# Total: 514 x 549
# In the original image:
# Outer rounded rect border is from approx x=22, y=24 to x=492, y=525.
# The "G" leaf emblem is from approx x=65, y=55 to x=450, y=395.
# The text "Global Economist" is from y=415 to y=460.
# The subtitle is from y=460 to y=500.

# 1. Pure G emblem (icon only, no text):
$emblemCropX = 60
$emblemCropY = 60
$emblemCropW = 394
$emblemCropH = 345

$emblemRect = [System.Drawing.Rectangle]::new($emblemCropX, $emblemCropY, $emblemCropW, $emblemCropH)
$emblemBmp = $src.Clone($emblemRect, $src.PixelFormat)
$emblemBmp.Save("D:\AI-Ideas\Globe_Economist\public\logo-emblem.png", [System.Drawing.Imaging.ImageFormat]::Png)
$emblemBmp.Dispose()

# 2. Trimmed full logo (trimming off the outer thin beige border so we can apply our own clean CSS golden border with border radius):
$trimmedCropX = 26
$trimmedCropY = 28
$trimmedCropW = 462
$trimmedCropH = 494

$trimmedRect = [System.Drawing.Rectangle]::new($trimmedCropX, $trimmedCropY, $trimmedCropW, $trimmedCropH)
$trimmedBmp = $src.Clone($trimmedRect, $src.PixelFormat)
$trimmedBmp.Save("D:\AI-Ideas\Globe_Economist\public\logo-trimmed.png", [System.Drawing.Imaging.ImageFormat]::Png)
$trimmedBmp.Dispose()

$src.Dispose()
Write-Output "Perfect crops created: logo-emblem.png ($($emblemCropW)x$($emblemCropH)) and logo-trimmed.png ($($trimmedCropW)x$($trimmedCropH))."
