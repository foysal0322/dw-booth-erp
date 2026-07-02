import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      // Allow access to API routes for now, we'll secure them in the route handlers
      if (nextUrl.pathname.startsWith('/api')) {
          return true;
      }
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Redirect to dashboard if logged in and trying to access login or root
        if (nextUrl.pathname === '/login' || nextUrl.pathname === '/') {
           return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }
      
      // Require authentication for all other routes except login
      if (!isLoggedIn && nextUrl.pathname !== '/login') {
          return false;
      }
      
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
