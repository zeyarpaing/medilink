import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { Account } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { revalidateTag } from 'next/cache';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user as Account);
      return token;
    },
    session: async ({ session, token }) => {
      return { ...session, user: token.user };
    },
  },
  debug: true,
  pages: {
    signIn: sitemap.login.href,
    signOut: sitemap.logout.href,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.account.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) return null;
        const password = new Password(credentials?.password);
        const comp = password.compare(user?.password);

        if (!comp) return null;
        revalidateTag('account');
        revalidateTag('provider');
        return { ...user, password: undefined };
      },
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      id: 'credentials',
      name: 'Credentials',
    }),
    CredentialsProvider({
      id: 'direct_jwt_auth',
      credentials: {},
      async authorize(credentials: any): Promise<Account> {
        return {
          ...credentials,
          callbackUrl: undefined,
          redirect: undefined,
          csrfToken: undefined,
          json: undefined,
        };
      },
    }),
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
};
