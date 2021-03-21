import asyncfile
import prologue

proc indexPage*(ctx: Context) {.async.} =
  resp await openAsync("static/pages/index.html").readAll()

proc projectsPage*(ctx: Context) {.async.} =
  resp await openAsync("static/pages/projects.html").readAll()

proc error404Page*(ctx: Context) {.async.} =
  resp await openAsync("static/pages/404.html").readAll()

proc error500Page*(ctx: Context) {.async.} =
  resp await openAsync("static/pages/500.html").readAll()
