from uuid import uuid4

from sqlalchemy import BigInteger, Boolean, Column, Unicode
from sqlalchemy.dialects.postgresql import UUID

from core.database import Base
from core.database.mixins import TimestampMixin


class User(Base, TimestampMixin):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    uuid = Column(UUID(as_uuid=True), default=uuid4, unique=True, nullable=False)
    full_name = Column(Unicode(255), nullable=False)
    email = Column(Unicode(255), nullable=False, unique=True)
    phone_number = Column(Unicode(255), nullable=False)
    is_admin = Column(Boolean, default=False)
