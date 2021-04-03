import imageman

proc asciify(image: Image, palette: string): string =
  for y in countup(0, image.height - 1):
    for x in countup(0, image.width - 1):
      let
        r = image[x, y].r.float
        g = image[x, y].g.float
        b = image[x, y].b.float
        lumi = 0.2126 * r + 0.7152 * g + 0.0722 * b
        index = lumi * (palette.len - 1).float

      echo lumi, ", ", index

      result &= palette[index.int]

    result &= '\n'

when isMainModule:
  let image = loadImage[ColorRGBF]("src/static/images/petus.png")
  let asciiImage = asciify(image, " `-~+#@")

  echo asciiImage
