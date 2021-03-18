import prologue/middlewares/staticfile
import prologue
import os

setCurrentDir(getAppDir())

let settings = newSettings(
  appName = "iapetus11.me",
  debug = true,
  address = "0.0.0.0",
  port = Port(8080),
  secretKey = "bruh"
)

proc startup() =
  echo "Server started!"

var app = newApp(
  settings = settings,
  startup = @[initEvent(startup)]
)

app.use(staticFileMiddleware("/public"))

app.run()
