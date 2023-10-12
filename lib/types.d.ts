import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
      role: 'ADMIN' | 'DOCTOR' | 'USER';
    };
  }
}
