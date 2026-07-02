import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUser(emailOrPhone: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: emailOrPhone },
          { phone: emailOrPhone }
        ]
      }
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ emailOrPhone: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { emailOrPhone, password } = parsedCredentials.data;
          const user = await getUser(emailOrPhone);
          if (!user) return null;
          
          const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
          if (passwordsMatch) {
             return { id: user.id, email: user.email, name: user.name, role: user.role };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
         (session.user as any).role = token.role;
         session.user.id = token.id as string;
      }
      return session;
    }
  }
});
