import aiohttp_jinja2
import aiohttp

router = aiohttp.web.RouteTableDef()

@router.get('/')
@aiohttp_jinja2.template('static/index.html')
async def index(req: aiohttp.web.Request):
    return {}
