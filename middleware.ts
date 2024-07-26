import { NextRequest, NextResponse } from "next/server";
import { decode_jwt, validate_jwt } from "jwt-toolkit-fast";

const secret = process.env.JWT_SECRET || "";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('token');
  console.log('Session:', session);

  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  console.log('Is Protected Route:', isProtectedRoute);

  if (isProtectedRoute) {
    if (!session || !session.value) {
      console.log('No session cookie found. Redirecting to login.');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const isValid = await validate_jwt(secret, session.value);
      console.log('Is JWT Valid:', isValid);

      if (!isValid) {
        throw new Error('Invalid or expired token');
      }

      const decodedToken = await decode_jwt(secret, session.value);
      console.log(decodedToken);
      
      // Proceed with the request
      return NextResponse.next();
    } catch (error) {
      console.log('Error during JWT validation:', error);
      return new NextResponse('unauthorized', { status: 401 });
    }
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};
