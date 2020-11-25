import traceback
import aiohttp


class ErrorHandler:
    def __init__(self, app):
        app.middlewares.append(self.error_handler)

    @aiohttp.web.middleware
    async def error_handler(self, req, handler):
        try:
            return await handler(req)
        except Exception as e:
            if isinstance(e, aiohttp.web.HTTPNotFound):
                raise aiohttp.web.HTTPFound('/404')
            else:
                print(''.join(traceback.format_exception(type(e), e, e.__traceback__, 4)))
                raise aiohttp.web.HTTPFound('/500')
