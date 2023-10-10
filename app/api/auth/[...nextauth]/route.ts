import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
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
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            role: true,
            password: true,
            email: true,
            name: true,
            image: true,
            id: true,
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
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
