// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-pathname", request.nextUrl.pathname);
//   console.log("middleware: ", request.nextUrl.pathname);

//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });

//   return response;
// }

// export const config = {
//   matcher: ["/((?!api|err|admin|_next|favicon\\.ico).*)"],
// };

export { auth as middleware } from "@/lib/auth";
