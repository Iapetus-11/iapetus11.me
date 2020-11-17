import aiohttp_jinja2
import aiohttp
import asyncio
import jinja2
import os

async def main():
    app = aiohttp.web.Application(client_max_size=67108864)

    for route_file in os.listdir(path='./routes'):
        if route_file.endswith('.py') and route_file != 'example.py':
            route = __import__(route_file.replace('.py', ''))
            route.setup(app)

    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('src/pages'))  # load templates/pages

    aiohttp.web.run_app(app)

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
