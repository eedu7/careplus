import os

from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()


class BaseConfig(BaseSettings):
    class Config:
        case_sensitive = True


class Config(BaseConfig):
    POSTGRES_URL: str | None = os.getenv("POSTGRES_URL")
    SECRET_KEY: str = "aSecretKey"
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 60 * 24


config: Config = Config()
