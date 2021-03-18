import asyncfile
import prologue

proc indexPage*(ctx: Context) {.async.} =
  resp await openAsync("public/pages/index.html").readAll()
