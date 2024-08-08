# pylint: disable=all

from pydantic import BaseModel, EmailStr


class RegisterUserRequest(BaseModel):
    email: EmailStr
    phone_number: str
    full_name: str


class LoginUserRequest(BaseModel):
    full_name: EmailStr
    phone_number: str
