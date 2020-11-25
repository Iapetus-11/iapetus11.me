import aiohttp_jinja2
import aiohttp

router = aiohttp.web.RouteTableDef()

@router.get('/404')
@aiohttp_jinja2.template('404.html')
async def index(req: aiohttp.web.Request):
    return {}
