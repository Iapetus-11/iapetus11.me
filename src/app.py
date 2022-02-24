import logging
import traceback
from typing import Union

from fastapi import FastAPI, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware


def format_exception(e: Exception) -> str:
    return "".join(traceback.format_exception(type(e), e, e.__traceback__, 4))


app = FastAPI(
    title="iapetus11.me",
    version="1.0.0",
    middleware=[
        Middleware(
            CORSMiddleware,
            allow_origins=[
                "http://localhost",
                "https://iapetus11.me",
            ],
            allow_credentials=True,
            allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allow_headers=["*", "Authorization"],
            expose_headers=["*", "Authorization"],
        )
    ],
    docs_url=None,
    redoc_url=None,
)

logger = logging.getLogger("main")


def log_exception(e: Exception) -> None:
    """Logs a nicely formatted exception"""

    if isinstance(e, (HTTPException, StarletteHTTPException)):
        return

    traceback_lines = format_exception(e).strip("\n").split("\n")

    for line in traceback_lines:
        logger.error(line)


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(req: Request, e: StarletteHTTPException) -> Union[JSONResponse, FileResponse]:
    log_exception(e)

    if e.status_code == 404:
        return FileResponse("static/pages/404.html", status_code=404)

    return JSONResponse(status_code=e.status_code, content={"detail": e.detail})


@app.exception_handler(Exception)
async def general_exception_handler(req: Request, e: Exception) -> FileResponse:
    log_exception(e)
    return FileResponse("static/pages/500.html", status_code=500)


@app.exception_handler(RequestValidationError)
async def req_validation_exception_handler(req: Request, e: Exception) -> JSONResponse:
    return JSONResponse(status_code=422, content={"detail": e.errors()})


app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def page_index():
    return FileResponse("static/pages/index.html")


@app.get("/projects")
async def page_projects():
    return FileResponse("static/pages/projects.html")


@app.get("/hackathons")
async def page_hackathons():
    return FileResponse("static/pages/hackathons.html")


@app.get("/amogus")
async def page_amogus():
    return FileResponse("static/pages/amogus.html")


@app.get("/asteroids")
async def page_asteroids():
    return FileResponse("static/pages/asteroids.html")


@app.get("/s/{slug}")
async def shortcut(slug: str):
    return RedirectResponse(f"https://api.iapetus11.me/s/{slug}")
