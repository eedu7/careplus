from datetime import datetime, timedelta
from http import HTTPStatus

import jwt

from core.config import config
from core.exceptions import CustomException


class JWTDecodeError(CustomException):
    code = HTTPStatus.NOT_FOUND
    message = "Invalid token"


class JWTExpiredError(CustomException):
    code = HTTPStatus.NOT_FOUND
    message = "Token expired"


class JWTHandler:
    secret_key: str = config.SECRET_KEY
    algorithm: str = config.JWT_ALGORITHM
    expire_minutes: int = config.JWT_EXPIRE_MINUTES

    @staticmethod
    def encode(payload: dict) -> str:
        expire = datetime.utcnow() + timedelta(minutes=JWTHandler.expire_minutes)
        payload.update({"exp": expire})
        return jwt.encode(
            payload, JWTHandler.secret_key, algorithm=JWTHandler.algorithm
        )

    @staticmethod
    def decode(token: str) -> dict:
        try:
            return jwt.decode(
                token, JWTHandler.secret_key, algorithms=[JWTHandler.algorithm]
            )
        except jwt.ExpiredSignatureError as exception:
            raise JWTExpiredError() from exception
        except jwt.InvalidTokenError as exception:
            raise JWTDecodeError() from exception

    @staticmethod
    def decode_expired(token: str) -> dict:
        try:
            return jwt.decode(
                token,
                JWTHandler.secret_key,
                algorithms=[JWTHandler.algorithm],
                options={"verify_exp": False},
            )
        except jwt.InvalidTokenError as exception:
            raise JWTDecodeError() from exception
