import { NextResponse } from "next/server";

export function middleware(req, ev) {
  const response = NextResponse.next();

  response.headers.set("Referrer-Policy", "origin-when-cross-origin");

  return response;
}
