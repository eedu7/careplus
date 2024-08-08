import uvicorn

if __name__ == "__main__":
    uvicorn.run(app="core.server:app", port=8002, reload=True)
