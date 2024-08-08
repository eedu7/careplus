from pydantic import EmailStr

from app.models import User
from app.repositories import UserRepository
from app.schemas.extras.token import Token
from core.controller import BaseController
from core.exceptions import BadRequestException, UnauthorizedException
from core.security import JWTHandler


class AuthController(BaseController[User]):
    def __init__(self, user_repository: UserRepository):
        super().__init__(model=User, repository=user_repository)
        self.user_repository = user_repository

    async def register(
        self, email: EmailStr, phone_number: str, full_name: str
    ) -> User:
        # Check if user exists with email
        user = await self.user_repository.get_by_email(email)

        if user:
            raise BadRequestException("User already exists with this email")

        # Check if user exists with username
        # user = await self.user_repository.get_by_username(username)

        if user:
            raise BadRequestException("User already exists with this username")

        return await self.user_repository.create(
            {
                "email": email,
                "phone_number": phone_number,
                "full_name": full_name,
            }
        )

    async def login(self, full_name: str, phone_number: str) -> Token:
        user = await self.user_repository.get_by_phone_number(phone_number)

        if not user:
            raise BadRequestException("Invalid credentials")

        if not user.full_name == full_name:
            raise BadRequestException("Invalid credentials")

        return Token(
            access_token=JWTHandler.encode(payload={"user_id": user.id}),
            refresh_token=JWTHandler.encode(payload={"sub": "refresh_token"}),
        )

    async def refresh_token(self, access_token: str, refresh_token: str) -> Token:
        token = JWTHandler.decode(access_token)
        refresh_token = JWTHandler.decode(refresh_token)
        if refresh_token.get("sub") != "refresh_token":
            raise UnauthorizedException("Invalid refresh token")

        return Token(
            access_token=JWTHandler.encode(payload={"user_id": token.get("user_id")}),
            refresh_token=JWTHandler.encode(payload={"sub": "refresh_token"}),
        )
