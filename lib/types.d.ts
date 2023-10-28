import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { Account } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: Account;
  }
}

declare module 'next-auth/jwt' {
  interface DefaultJWT {
    user?: Account;
  }
}
