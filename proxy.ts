import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from './utils/jwt';
import { cookies } from 'next/headers';
import { getNewAccessToken } from '@/service/refreshToken';


const AUTH_ROUTES =["/login", "/register"]
const PUBLIC_ROUTES = [
    "/",
    "/services",
    "/technicians",
    "/payment/success",
    "/payment/cancel",
]

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies();
    let accessToken = request.cookies.get("accessToken")?.value;
    const refreshToken = request.cookies.get("refreshToken")?.value;
    let decodedAccessToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null;
    const decodedRefreshToken = refreshToken ? jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) : null;
    if(!decodedAccessToken?.success && decodedRefreshToken?.success){
        // access token has expired but refresh token is valid. get new access token from backend
        const result = await getNewAccessToken();

        // console.log(result)

        if(result.success){
            const newAccessToken = result.data?.accessToken;
            cookieStore.set("accessToken", newAccessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 48,
                sameSite: "lax",
            })

            accessToken = newAccessToken;
            decodedAccessToken = jwtUtils.verifyToken(accessToken!, process.env.JWT_ACCESS_SECRET as string);
        }
    }

    let userRole = null;

    if(!decodedAccessToken?.success){
        // token has expired or is invalid, clear the cookies
        cookieStore.delete("accessToken");

    }

    if(decodedAccessToken?.success && decodedAccessToken.data){
        userRole = (decodedAccessToken.data as JwtPayload).role;
    }

// user in logged in and trying to access login or register page, redirect to dashboard or root home page
    if(accessToken && AUTH_ROUTES.includes(pathname)){
        if(userRole === "CUSTOMER"){
            return NextResponse.redirect(new URL("/dashboard/customer",  request.url));
        }else if(userRole === "ADMIN"){
            return NextResponse.redirect(new URL("/admin/dashboard", request.url));
        }else if(userRole === "TECHNICIAN"){
            return NextResponse.redirect(new URL("/dashboard/technician", request.url));
        }else{
            return NextResponse.redirect(new URL("/", request.url));
        }
    }


    const isPublicRoutes = PUBLIC_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));
    const isAuthRoutes = AUTH_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));


    //Authenticated Pages Protection : Authorization is not handle yet.
    if(!accessToken && !isPublicRoutes && !isAuthRoutes){
        return NextResponse.redirect(new URL("/login", request.url));
    }

// Authorization: Role based access control
    if(pathname.startsWith("/dashboard/customer") && userRole !== "CUSTOMER"){
        return NextResponse.redirect(new URL("/not-found", request.url));
    }else if(pathname.startsWith("/admin/dashboard") && userRole !== "ADMIN"){
        return NextResponse.redirect(new URL("/not-found", request.url));
    }else if(pathname.startsWith("/dashboard/technician") && userRole !== "TECHNICIAN"){
        return NextResponse.redirect(new URL("/not-found", request.url));
    }
    return NextResponse.next();

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: [
        // Exclude API routes, static files, image optimizations, and .png files
        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
    ],
}

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { JwtPayload } from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { jwtUtils } from "./utils/jwt";
// import { getNewAccessToken } from "@/service/refreshToken";
//
// const AUTH_ROUTES = ["/login", "/register"];
//
// const PUBLIC_ROUTES = [
//     "/",
//     "/services",
//     "/technicians",
//     "/payment/success",
//     "/payment/cancel",
// ];
//
// // Role Based Routes
// const ROLE_ROUTES: Record<string, string[]> = {
//     ADMIN: ["/admin", "/profile"],
//
//     TECHNICIAN: [
//         "/dashboard/technician",
//         "/profile",
//     ],
//
//     CUSTOMER: [
//         "/dashboard/customer",
//         "/bookings",
//         "/payments",
//         "/reviews",
//         "/profile",
//     ],
// };
//
// export async function proxy(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;
//
//     const cookieStore = await cookies();
//
//     let accessToken = request.cookies.get("accessToken")?.value;
//     const refreshToken = request.cookies.get("refreshToken")?.value;
//
//     let decodedAccessToken = accessToken
//         ? jwtUtils.verifyToken(
//             accessToken,
//             process.env.JWT_ACCESS_SECRET as string
//         )
//         : null;
//
//     const decodedRefreshToken = refreshToken
//         ? jwtUtils.verifyToken(
//             refreshToken,
//             process.env.JWT_REFRESH_SECRET as string
//         )
//         : null;
//
//     // Refresh Access Token
//     if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
//         const result = await getNewAccessToken();
//
//         if (result.success) {
//             const newAccessToken = result.data?.accessToken;
//
//             cookieStore.set("accessToken", newAccessToken, {
//                 httpOnly: true,
//                 sameSite: "lax",
//                 maxAge: 60 * 60 * 48,
//             });
//
//             accessToken = newAccessToken;
//
//             decodedAccessToken = jwtUtils.verifyToken(
//                 newAccessToken,
//                 process.env.JWT_ACCESS_SECRET as string
//             );
//         }
//     }
//
//     let userRole: string | null = null;
//
//     if (!decodedAccessToken?.success) {
//         cookieStore.delete("accessToken");
//     }
//
//     if (decodedAccessToken?.success && decodedAccessToken.data) {
//         userRole = (decodedAccessToken.data as JwtPayload).role;
//     }
//
//     // Logged-in users shouldn't visit Login/Register
//     if (accessToken && AUTH_ROUTES.includes(pathname)) {
//         switch (userRole) {
//             case "ADMIN":
//                 return NextResponse.redirect(new URL("/admin", request.url));
//
//             case "TECHNICIAN":
//                 return NextResponse.redirect(
//                     new URL("/dashboard/technician", request.url)
//                 );
//
//             case "CUSTOMER":
//                 return NextResponse.redirect(
//                     new URL("/dashboard/customer", request.url)
//                 );
//
//             default:
//                 return NextResponse.redirect(new URL("/", request.url));
//         }
//     }
//
//     const isPublicRoute = PUBLIC_ROUTES.some(
//         (route) => pathname === route || pathname.startsWith(route + "/")
//     );
//
//     const isAuthRoute = AUTH_ROUTES.some(
//         (route) => pathname === route || pathname.startsWith(route + "/")
//     );
//
//     // Authentication
//     if (!accessToken && !isPublicRoute && !isAuthRoute) {
//         return NextResponse.redirect(new URL("/login", request.url));
//     }
//
//     // Authorization
//     if (userRole) {
//         const allowedRoutes = ROLE_ROUTES[userRole] || [];
//
//         const hasAccess = allowedRoutes.some(
//             (route) => pathname === route || pathname.startsWith(route + "/")
//         );
//
//         // Only check protected routes
//         const isProtectedRoute =
//             pathname.startsWith("/dashboard") ||
//             pathname.startsWith("/admin") ||
//             pathname.startsWith("/bookings") ||
//             pathname.startsWith("/payments") ||
//             pathname.startsWith("/reviews") ||
//             pathname.startsWith("/profile");
//
//         if (isProtectedRoute && !hasAccess) {
//             return NextResponse.redirect(new URL("/not-found", request.url));
//         }
//     }
//
//     return NextResponse.next();
// }
//
// export const config = {
//     matcher: [
//         "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
//     ],
// };