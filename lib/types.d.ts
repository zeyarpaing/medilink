import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
type User = {
  email: string;
  id: string;
  image: string;
  name: string;
  role: 'ADMIN' | 'DOCTOR' | 'USER';
};
declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface DefaultJWT {
    user?: User;
  }
}
