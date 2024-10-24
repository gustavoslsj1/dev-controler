import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PrismaClient from "@/lib/prisma"
export async function POST(request:Request){
    const session = await getServerSession(authOptions)

    if(!session || !session.user){
        return  NextResponse.json({error:"not autho"}, {status:401})
    }
    const {name,email,phone, address, userId} = await request.json()
    console.log(name)
    console.log(address)
    console.log(phone)
   console.log(userId)

    try{
        await PrismaClient.customer.create({
            data:{
                name,
                phone,
                email,
                address:address?address: "",
                userId:userId
            }
        })
        return NextResponse.json({message:"client create"})
    }catch(err){
        return NextResponse.json({error:"failed create new client"}, {status:400})
    }


    return NextResponse.json({message:"Rota de cadastro"})
}