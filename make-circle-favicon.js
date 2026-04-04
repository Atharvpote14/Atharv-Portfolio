const fs = require('fs')
const path = require('path')

try {
  const { createCanvas, loadImage } = require('canvas')

  const SIZE = 64
  const canvas = createCanvas(SIZE, SIZE)
  const ctx = canvas.getContext('2d')

  const imgBuffer = fs.readFileSync(path.join(__dirname, 'public', 'AP logo.jpg'))

  loadImage(imgBuffer).then((img) => {
    ctx.beginPath()
    ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(img, 0, 0, SIZE, SIZE)

    const buf = canvas.toBuffer('image/png')
    fs.writeFileSync(path.join(__dirname, 'public', 'ap-logo-circle.png'), buf)
    fs.writeFileSync(path.join(__dirname, 'src', 'app', 'favicon.ico'), buf)
    console.log('SUCCESS: circular favicon written to public/ap-logo-circle.png and src/app/favicon.ico')
  })
} catch (e) {
  console.log('node-canvas not available:', e.message)
  console.log('Trying PowerShell SVG approach instead...')
}
