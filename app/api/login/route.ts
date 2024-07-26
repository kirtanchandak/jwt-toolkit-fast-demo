import { NextRequest, NextResponse } from 'next/server';
import { encode_jwt } from 'jwt-toolkit-fast';

const secret = process.env.JWT_SECRET || "";

export async function POST(request: NextRequest) {
  try {
    const { id, payload, options } = await request.json();
    if (!id || !payload) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    
    const token = await encode_jwt(secret, id, payload, options);
    
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: options.ttl || 3600, // 1 hour in seconds
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Error in POST route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}