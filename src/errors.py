import traceback
import aiohttp


def add_error_handler(app):

    @aiohttp.web.middleware
    async def error_handler(req, handler):
        try:
            return await handler(req)
        except Exception as e:
            if isinstance(e, aiohttp.web.HTTPNotFound):
                raise aiohttp.web.HTTPFound('/404')
            else:
                print(''.join(traceback.format_exception(type(e), e, e.__traceback__, 4)))
                raise aiohttp.web.HTTPFound('/500')

    app.middlewares.append(error_handler)
