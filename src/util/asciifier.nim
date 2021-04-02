import imageman



proc asciify(image: Image, palette: string): string =
  for y in countup(0, image.height - 1):
    for x in countup(0, image.width - 1):
      let r, g, b =
      let lumi = 0.2126 * r + 0.7152 * g + 0.0722 * b
      result &= palette.getAsciiValue(calculateLuminosity(image[x, y]))

    result &= '\n'

when isMainModule:
  let image = loadImage[ColorRGBU]("src/static/images/petus.png")
  let asciiImage = asciify(image, " `-~+#@")

  echo asciiImage
