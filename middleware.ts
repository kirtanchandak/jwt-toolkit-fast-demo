import { NextRequest, NextResponse } from "next/server";
import { decode_jwt } from "jwt-toolkit-fast";
import { validateAndDecodeToken } from "./app/lib/auth";

const secret = 'secret';

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('token');
  console.log('Session:', session);

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  // Check if the current request is for a protected route
  const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  console.log('Is Protected Route:', isProtectedRoute);

  if (isProtectedRoute) {
    if (!session) {
      // If no session, redirect to login
      console.log('No session cookie found. Redirecting to login.');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // // Validate the JWT
      // const isValid = validate_jwt(secret, session.value);
      // console.log('Is JWT Valid:', isValid);

      // if (!isValid) {
      //   throw new Error('Invalid or expired token');
      // }

      // Decode the JWT to extract user data
      const decodedToken = await decode_jwt("secret", session.value)
      console.log(decodedToken);
      
      // Proceed with the request
      return NextResponse.next();
    } catch (error) {
      // Invalid or expired session, redirect to login
      console.log('Error during JWT validation:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // For non-protected routes, proceed with the request
  return NextResponse.next();
}

// Configure the middleware to run on specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};
