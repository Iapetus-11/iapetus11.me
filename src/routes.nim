import prologue

proc indexPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("index.html", "static/pages")

proc projectsPage*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("projects.html", "static/pages")

proc asciifierPageInitial*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("asciifier.html", "static/pages")

prpoc asciifierPageShow*(ctx: Context) {.async.} =

proc error404Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("404.html", "static/pages")

proc error500Page*(ctx: Context) {.async.} =
  await ctx.staticFileResponse("500.html", "static/pages")
