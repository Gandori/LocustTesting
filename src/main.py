from fastapi import FastAPI
from starlette.responses import JSONResponse

NAME = 'Template'
VERSION = '1.0.0'

service = FastAPI(
    title= NAME,
    version=VERSION,
    docs_url='/docs'
)

@service.get('/get')
async def get() -> JSONResponse:
    return JSONResponse({'Data': 'Get'})