import aiohttp
import asyncio

router = aiohttp.web.RouteTableDef()

@router.get('/')
async def hello(req: aiohttp.web.Request):
    return aiohttp.web.Response(status=200)

def setup(app):
    app.add_routes(router)
