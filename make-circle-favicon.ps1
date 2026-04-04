Add-Type -AssemblyName System.Drawing

$src = 'c:\Users\Atharv Pote\Documents\WEB PROJECTS\atharvpoteprotfolio2\public\AP logo.jpg'
$dst = 'c:\Users\Atharv Pote\Documents\WEB PROJECTS\atharvpoteprotfolio2\public\ap-logo-circle.png'
$ico = 'c:\Users\Atharv Pote\Documents\WEB PROJECTS\atharvpoteprotfolio2\src\app\favicon.ico'

$size = 64

$orig  = [System.Drawing.Image]::FromFile($src)
$bmp   = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g     = [System.Drawing.Graphics]::FromImage($bmp)

$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear([System.Drawing.Color]::Transparent)

$gp = New-Object System.Drawing.Drawing2D.GraphicsPath
$gp.AddEllipse(0, 0, $size, $size)
$g.SetClip($gp)

$g.DrawImage($orig, 0, 0, $size, $size)
$g.Dispose()

$bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
Copy-Item $dst $ico -Force

$orig.Dispose()
$bmp.Dispose()

Write-Host "SUCCESS: circular favicon saved"
