import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PrismaClient from "@/lib/prisma"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Newcard } from "../components/card";


export default async function Costumer() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const clientes = await PrismaClient.customer.findMany({
        where: {
            userId: session.user.id
        } 
    })

    console.log(clientes)
    console.error("User ID:", session.user.id)
    return (
        <Container>
            <main className="mt-9 px-4">

                <div className="flex justify-between mb-2">
                    <h1 className="font-bold text-3xl">
                        Chamados
                    </h1>
                    <Button>
                        <Link href="/dashboard/costumer/newclient">
                            Novo Cliente
                        </Link>
                    </Button>

                </div>
                
                <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {clientes.map((client)=>(
                        <Newcard 
                        key={client.id}
                        client={client}>
                        
                        </Newcard>
                    ))}

                </section>

            </main>


        </Container>
    )
}