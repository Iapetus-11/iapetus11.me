import asyncfile
import prologue

proc indexPage*(ctx: Context) {.async.} =
  resp await openAsync("public/pages/index.html").readAll()

proc error404Page*(ctx: Context) {.async.} =
  resp await openAsync("public/pages/404.html").readAll()

proc error500Page*(ctx: Context) {.async.} =
  resp await openAsync("public/pages/500.html").readAll()
