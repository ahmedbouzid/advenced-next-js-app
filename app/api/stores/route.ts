import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"




export async function POST (
   req : Request 
) {
    try {
        const {userId} = auth() ;
        const body = await req.json()
        const {name} = body
        // if user has not authentifcated
        if (!userId) {
            return new NextResponse ('unauthorized', {status :401})
        }
        // if user has not a name
        if (!name) { 
            return new NextResponse ('name is required' , {status : 400})
        }
        const store = await prismadb.store.create({
            data : {
                name ,
                userId
            }
        }) ; 
        return NextResponse.json(store)

    } catch (error) {
        console.log('STORE_ERROR', error)
        return new NextResponse ("Internal Error " , {status :500})
    }
}