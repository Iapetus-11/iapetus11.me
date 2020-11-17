import aiohttp_jinja2
import aiohttp
import asyncio
import jinja2

from routes import ROUTERS

async def main():
    cd = os.getcwd()
    app = aiohttp.web.Application(client_max_size=67108864)

    for router in ROUTERS: app.add_routes(router)

    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('src/pages'))  # load templates/pages

    aiohttp.web.run_app(app)

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
