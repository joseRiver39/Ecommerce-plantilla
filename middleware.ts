import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const isAuthenticated = request.cookies.get('auth_token')?.value === 'my_secret_token'

  if (url.pathname.startsWith('/admin') && !isAuthenticated && url.pathname !== '/admin/login') {
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  if (url.pathname === '/admin/login' && isAuthenticated) {
    url.pathname = '/admin/products'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/admin/login'],
}
