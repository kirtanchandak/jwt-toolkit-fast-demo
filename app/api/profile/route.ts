import { NextRequest, NextResponse } from 'next/server';
import { decode_jwt, validate_jwt } from 'jwt-toolkit-fast';

export async function GET(req: NextRequest) {
    const tokenCookie = req.cookies.get("token");
    if (!tokenCookie) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = tokenCookie.value;
    const secret = "secret"
    console.log(token);

    try {
        const decoded = await decode_jwt(secret, token);
        const isValid = validate_jwt(secret, token);

        if (!isValid) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        return NextResponse.json({ user: decoded });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
}
