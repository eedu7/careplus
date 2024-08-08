# pylint: disable=all

from pydantic import BaseModel, EmailStr
from pydantic_extra_types.phone_numbers import PhoneNumber


class RegisterUserRequest(BaseModel):
    email: EmailStr
    phone_number: PhoneNumber
    full_name: str


class LoginUserRequest(BaseModel):
    full_name: str
    phone_number: PhoneNumber
