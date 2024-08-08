from contextvars import ContextVar, Token
from typing import AsyncGenerator, Union

from sqlalchemy.ext.asyncio import async_sessionmaker  # Use async_sessionmaker
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_scoped_session,
    create_async_engine,
)
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql.expression import Delete, Insert, Update

from core.config import config

# Define the context variable for session management
session_context: ContextVar[str] = ContextVar("session_context")


def get_session_context() -> str:
    return session_context.get()


def set_session_context(session_id: str) -> Token:
    return session_context.set(session_id)


def reset_session_context(context: Token) -> None:
    session_context.reset(context)


# Create async engines
engines = {
    "writer": create_async_engine(config.POSTGRES_URL, pool_recycle=3600),
    "reader": create_async_engine(config.POSTGRES_URL, pool_recycle=3600),
}


# Adjusted RoutingSession for async usage
class RoutingSession(AsyncSession):
    def get_bind(self, mapper=None, clause=None, **kwargs):
        if self._flushing or isinstance(clause, (Update, Delete, Insert)):
            return engines["writer"].sync_engine
        return engines["reader"].sync_engine


# Create an async session factory
async_session_factory = async_sessionmaker(
    bind=engines["writer"],  # Set the bind to writer for default
    class_=RoutingSession,  # Use the custom RoutingSession
    expire_on_commit=False,
)

# Create an async scoped session
session: async_scoped_session = async_scoped_session(
    session_factory=async_session_factory,
    scopefunc=get_session_context,
)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    """
    Get the database session.
    This can be used for dependency injection.

    :return: The database session.
    """
    async with session() as s:
        try:
            yield s
        finally:
            await s.close()


Base = declarative_base()
