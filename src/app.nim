import prologue/middlewares/staticfile
import prologue
import os

import /routes

# allow running from above the src directory
setCurrentDir(getAppDir())

# create settings, should be loaded from a .env in the future
let settings = newSettings(
  appName = "iapetus11.me",
  debug = true,
  address = "0.0.0.0",
  port = Port(8080),
  secretKey = "bruh"
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
app.addRoute("/", routes.indexPage)
app.addRoute("/projects", routes.projectsPage)

app.run()
