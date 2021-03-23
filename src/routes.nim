import asyncfile
import prologue

proc indexPage*(ctx: Context) {.async.} =
  let file = openAsync("static/pages/index.html")

  resp await file.readAll()

  file.close()

proc projectsPage*(ctx: Context) {.async.} =
  let file = openAsync("static/pages/projects.html")

  resp await file.readAll()

  file.close()

proc error404Page*(ctx: Context) {.async.} =
  let file = openAsync("static/pages/404.html")

  resp await file.readAll(), Http404

  file.close()

proc error500Page*(ctx: Context) {.async.} =
  let file = openAsync("static/pages/500.html")

  resp await file.readAll(), Http500

  file.close()
