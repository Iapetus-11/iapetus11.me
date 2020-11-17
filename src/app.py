import aiohttp_jinja2
import aiohttp
import asyncio
import jinja2

# Routes
import routes.example as EXAMPLE_ROUTE

async def main():
    app = aiohttp.web.Application(client_max_size=67108864)

    # Load / use routes
    # app.add_routes(EXAMPLE_ROUTE.router)

    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('src/pages'))  # load templates/pages

    return app

if __name__ == '__main__':
    aiohttp.web.run_app(asyncio.get_event_loop().run_until_complete(main()))
