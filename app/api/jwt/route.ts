import { NextRequest, NextResponse } from "next/server";
import { encode_jwt } from "jwt-toolkit-fast";

const SECRET_KEY = 'secret';

export async function POST(request: NextRequest) {
  const { id, payload, ttl } = await request.json();

  if (!id || !payload) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const token = encode_jwt(SECRET_KEY, id, payload, ttl);
  return NextResponse.json({ token });
}