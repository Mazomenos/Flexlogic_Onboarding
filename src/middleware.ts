import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function middleware(req: NextRequest){
    const response = NextResponse.next()


    if (req.nextUrl.pathname === '/') {
        response.cookies.set("userID", "hola")
    }

    if (req.nextUrl.pathname.startsWith('/Cliente')) {
        const bo = cookies().get('userID')
        if (bo){
            console.log("hola", bo)
        } else {
            return NextResponse.redirect(new URL('/', req.url))
        } }
    return response
}
