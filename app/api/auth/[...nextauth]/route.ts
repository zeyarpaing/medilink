import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { User } from '@/lib/types';
import { Password } from '@/lib/utils';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { revalidateTag } from 'next/cache';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user as User);
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
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
