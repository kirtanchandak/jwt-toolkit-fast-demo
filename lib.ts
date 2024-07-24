import { decode_jwt } from 'jwt-toolkit-fast';
import { cookies } from 'next/headers';

const secret = 'secret';

export function validateAndDecodeToken(token: string) {
  const isValid = decode_jwt(secret, token);
  if (!isValid) {
    throw new Error('Invalid or expired token');
  }
  return decode_jwt(secret, token);
}


export async function logout() {
    cookies().set("session", "", { expires: new Date(0) });
  }