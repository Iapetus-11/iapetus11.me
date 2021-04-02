import streams
import nimPNG

proc calculateLuminosity(r: uint8, g: uint8, b: uint8, a: uint8): float =
  return (0.2126 * float(r) + 0.7152 * float(g) + 0.0722 * float(b)) * (255.0 / float(a))

proc getAsciiValue(palette: string, luminosity: float): char =
  return palette[int((luminosity / 255.0) * float(palette.len - 1))]

proc asciify(image: PNGResult, palette: string): StringStream =
  let size = image.width * image.height
  let imageData = newStringStream(image.data)  # four bytes per pixel

  result = newStringStream()

  for i in 0..size-1:
    let r = imageData.readUint8()
    let g = imageData.readUint8()
    let b = imageData.readUint8()
    let a = imageData.readUint8()

    let luminosity = calculateLuminosity(r, g, b, a)
    result.write(palette.getAsciiValue(luminosity))

    if i mod image.width == image.width - 1:
      result.write('\n')

when isMainModule:
  let image = loadPNG32("src/static/images/petus.png")

  let asciiTextStream = asciify(image, " `-~+#@")
  asciiTextStream.setPosition(0)

  echo asciiTextStream.readAll()
