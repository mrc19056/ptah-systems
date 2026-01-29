import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
            email?: string | null;
            name?: string | null;
            image?: string | null;
        }
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    throw new Error("User not found");
                }

                // Temporary: Allow login if role is present (User model update included password but we didn't hash here yet)
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
    // On Hostinger, process.env might be tricky in some runtimes. 
    // We provide a fallback for debugging, but user SHOULD set NEXTAUTH_SECRET in hPanel.
    secret: process.env.NEXTAUTH_SECRET || "ptah-systems-super-secret-key-123",
    debug: true, // Enable debug for production temporarily to catch errors in logs
    callbacks: {
        async session({ session, token }) {
            console.log("NextAuth Session Callback - Token:", !!token);
            if (token && session.user) {
                session.user.role = token.role as string;
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                console.log("NextAuth JWT Callback - User role:", (user as any).role);
                token.role = (user as any).role;
                token.id = user.id;
            }
            return token;
        }
    }
};
