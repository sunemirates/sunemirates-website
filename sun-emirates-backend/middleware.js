import { NextResponse } from 'next/server';

export function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth !== 'Basic ' + Buffer.from('admin:1234').toString('base64')) {
    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}