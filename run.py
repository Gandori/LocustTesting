import uvicorn
import os
from src.main import service

if __name__ == "__main__":
    HOST = os.environ['HOST']
    PORT = os.environ['PORT']

    if HOST and PORT:
        config = uvicorn.Config(
            app = service,
            host= HOST,
            port= int(PORT)
        )

        server = uvicorn.Server(config)
        server.run()