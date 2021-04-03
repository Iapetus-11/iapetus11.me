import strformat
import imageman
import prologue
import times
import os

import util/asciifier

proc indexPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("index.html", "static/pages")

proc projectsPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("projects.html", "static/pages")

proc asciifierPageGet*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("asciifier.html", "static/pages")

proc asciifierPagePost*(ctx: Context) {.async.} =
  # get file and save it to disk
  let file = ctx.getUploadFile("image")
  let tempFileName = &"temp/{cpuTime()}-{file.filename}"
  file.save(tempFileName)

  # load image as imageman image
  var image = imageman.loadImage[ColorRGBF](tempFileName)

  # resize
  image = image.scaleDownToMax(128).stretchWidth(3)

  # asciify + return
  resp image.asciify(" `-~+#@")

  # delete temp file
  removeFile(tempFileName)

proc error404Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("404.html", "static/pages")

proc error500Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("500.html", "static/pages")
