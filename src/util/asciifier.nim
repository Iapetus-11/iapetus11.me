import opencv/core, opencv/highgui, opencv/imgproc
import streams

proc asciify(image: ptr TArr): StringStream =
  echo TArr

when isMainModule:
  var image = loadImage("../static/images/emeraldore.png", 1)

  let asciiImageStream = asciify(image)
  asciiImageStream.setPosition(0)

  echo asciiImageStream.readAll()
