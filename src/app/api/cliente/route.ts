import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PrismaClient from "@/lib/prisma"


export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "not autho" }, { status: 401 })
    }
    const { searchParams } = new URL(request.url)

    const userId = searchParams.get("id")

    try {

        await PrismaClient.customer.delete({
            where: {
                id: userId as string
            }
        })

        NextResponse.json({ error: "failed delet costumer" }, { status: 400 })
    } catch (err) {
        NextResponse.json({ error: "failed delet costumer" }, { status: 400 })
    }

    const findTicket = await PrismaClient.ticket.findFirst({
        where: {
            customerId: userId
        }
    })

    if (findTicket) {
        return NextResponse.json({ error: "failed delet costumer" }, { status: 400 })
    }
}


// criando client
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "not autho" }, { status: 401 })
    }
    const { name, email, phone, address, userId } = await request.json()

    try {
        await PrismaClient.customer.create({
            data: {
                name,
                phone,
                email,
                address: address ? address : "",
                userId: userId
            }
        })
        return NextResponse.json({ message: "client create" })
    } catch (err) {
        return NextResponse.json({ error: "failed create new client" }, { status: 400 })
    }
}