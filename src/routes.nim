import asyncfile
import prologue

proc indexPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("static/pages/index.html", "static")

proc projectsPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("static/pages/projects.html", "static")

proc error404Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("static/pages/404.html", "static")

proc error500Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("static/pages/500.html", "static")
