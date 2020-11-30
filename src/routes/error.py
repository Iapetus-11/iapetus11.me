import aiohttp_jinja2
import aiohttp

router = aiohttp.web.RouteTableDef()

@router.get('/500')
@aiohttp_jinja2.template('500.html')
async def handler_500(req: aiohttp.web.Request):
    return {}
