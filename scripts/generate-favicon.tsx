/*
  Canvas-based generator: gradient background + single "J" in a playful script stack.
  To strictly use Meow Script, place its TTF on disk and register it with @napi-rs/canvas GlobalFonts.
*/
import { createCanvas, GlobalFonts } from "@napi-rs/canvas"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import pngToIco from "png-to-ico"

function drawLogo(size: number) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext("2d")

  // Rounded clip
  const radius = Math.floor(size * 0.2)
  ctx.beginPath()
  ctx.moveTo(radius, 0)
  ctx.lineTo(size - radius, 0)
  ctx.quadraticCurveTo(size, 0, size, radius)
  ctx.lineTo(size, size - radius)
  ctx.quadraticCurveTo(size, size, size - radius, size)
  ctx.lineTo(radius, size)
  ctx.quadraticCurveTo(0, size, 0, size - radius)
  ctx.lineTo(0, radius)
  ctx.quadraticCurveTo(0, 0, radius, 0)
  ctx.closePath()
  ctx.clip()

  // Background gradient
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.2)
  grad.addColorStop(0, "#0b1220")
  grad.addColorStop(0.4, "#0f172a")
  grad.addColorStop(0.7, "#1e1b4b")
  grad.addColorStop(1, "#312e81")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  // Letter J
  ctx.fillStyle = "#ffffff"
  ctx.textAlign = "center"
  const fontPx = Math.floor(size * 0.72)
  ctx.font = `${fontPx}px "Meow Script", "Brush Script MT", "Apple Chancery", "Segoe Script", "Lucida Handwriting", cursive, Helvetica, Arial, sans-serif`
  // Use metrics to vertically center precisely
  ctx.textBaseline = "alphabetic"
  const metrics = ctx.measureText("J") as unknown as {
    actualBoundingBoxAscent?: number
    actualBoundingBoxDescent?: number
    actualBoundingBoxLeft?: number
    actualBoundingBoxRight?: number
  }
  const ascent = (metrics.actualBoundingBoxAscent ?? fontPx * 0.8)
  const descent = (metrics.actualBoundingBoxDescent ?? fontPx * 0.2)
  const textHeight = ascent + descent
  const baselineY = (size - textHeight) / 2 + ascent
  // Optical horizontal centering (upright glyph needs less offset)
  const opticalOffsetX = -size * 0.035
  ctx.fillText("J", Math.round(size / 2 + opticalOffsetX), Math.round(baselineY))

  return canvas
}

async function main() {
  // Try to register local Meow Script TTF if available for exact glyphs
  try {
    const fontsDir = join(process.cwd(), "public", "fonts")
    const fontPath = join(fontsDir, "MeowScript-Regular.ttf")
    if (!existsSync(fontsDir)) mkdirSync(fontsDir, { recursive: true })

    if (!existsSync(fontPath)) {
      const url = "https://github.com/google/fonts/raw/main/ofl/meowscript/MeowScript-Regular.ttf"
      console.log("Downloading Meow Script TTF…")
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Font download failed: ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      writeFileSync(fontPath, buf)
    }

    const fontBuffer = readFileSync(fontPath)
    GlobalFonts.register(fontBuffer, "Meow Script")
    console.log("Registered Meow Script font:", fontPath)
  } catch (e) {
    console.warn("Failed to ensure/register Meow Script font. Falling back:", e)
  }
  const sizes = [16, 32, 48, 64, 128, 256]
  const pngBuffers = sizes.map((s) => drawLogo(s).toBuffer("image/png"))
  const ico = await pngToIco(pngBuffers)
  const outDir = join(process.cwd(), "app")
  mkdirSync(outDir, { recursive: true })
  const out = join(outDir, "favicon.ico")
  writeFileSync(out, ico)
  console.log(`Generated ${out}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
