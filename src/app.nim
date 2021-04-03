import prologue/middlewares/staticfile
import prologue
import os

import /routes

# allow running from above the src directory
setCurrentDir(getAppDir())

# load .env file
let dotEnv = loadPrologueEnv("../.env")

# create settings
let settings = newSettings(
  debug = dotEnv.getOrDefault("debug", true),
  address = dotEnv.getOrDefault("address", "0.0.0.0"),
  port = Port(dotEnv.getOrDefault("port", 8080))
)

# called on startup
proc startup() =
  echo "Server started!"

# create app instance
var app = newApp(
  settings = settings,
  startup = @[initEvent(startup)]
)

# register error handlers
app.registerErrorHandler(Http404, routes.error404Page)
app.registerErrorHandler(Http500, routes.error500Page)

# serve static directory
app.use(staticFileMiddleware("/static"))

# add routes
app.addRoute("/", routes.indexPage, HttpGet)
app.addRoute("/projects", routes.projectsPage, HttpGet)
app.addRoute("/asciifier", routes.asciifierPageGet, HttpGet)
app.addRoute("/asciifier", routes.asciifierPagePost, HttpPost)

app.run()
