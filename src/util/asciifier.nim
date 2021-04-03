import imageman
import math

# proc asciify(image: Image, palette: string): string =
#   for y in countup(0, image.height - 1):
#     for x in countup(0, image.width - 1):
#       let
#         r = image[x, y].r.float
#         g = image[x, y].g.float
#         b = image[x, y].b.float
#
#         lumi = 0.2126 * r + 0.7152 * g + 0.0722 * b
#
#         index = (lumi * (palette.len - 1).float)
#
#       echo lumi, ", ", index
#
#       result &= palette[index.int]
#
#     result &= '\n'

proc asciifyPixel(palette: string, p: ColorRGBF): char =
  let lumi = 0.2126 * p.r + 0.7152 * p.g + 0.0722 * p.b
  let index = ceil((palette.len - 1).float * lumi).int

  return palette[index]

proc asciify(image: Image, palette: string): string =
  for i, p in image.data:
    if i mod image.width == 0:
      result &= '\n'

    result &= palette.asciifyPixel(p)

when isMainModule:
  let image = loadImage[ColorRGBF]("src/static/images/petus-circle.png").resizedNN(32, 16)
  let asciiImage = asciify(image, " `-~+#@")

  echo asciiImage
