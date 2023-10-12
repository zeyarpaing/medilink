import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      // @ts-ignore
      session.user = token.user;
      return session;
    },
  },
  debug: true,
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          select: {
            email: true,
            id: true,
            image: true,
            name: true,
            password: true,
            role: true,
          },
          where: {
            email: credentials?.email,
          },
        });
        console.log('authorize', user);
        if (!user) return null;
        const password = new Password(credentials?.password);
        const comp = password.compare(user?.password);
        console.log('compaare ', comp);
        if (!comp) return null;
        return { ...user, password: undefined };
      },
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      id: 'credentials',
      name: 'Credentials',
    }),
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
