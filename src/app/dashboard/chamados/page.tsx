
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { api } from "@/lib/api";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";
import { FormChamados } from "../components/formchamados";


export default async function Newchamado() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

   
    const clients = await prisma.customer.findMany({
        where: {
            userId: session.user.id
        }
    })

    return (
        <Container>
            <main className="mx-4">
                <header className="flex gap-5 mt-9 mb-4" >
                    <Button className="  px-2 ">
                        <Link href="/dashboard/costumer">
                            Voltar
                        </Link>

                    </Button>

                    <h1 className="font-bold text-2xl">Novo Chamado</h1>
                </header>

            <FormChamados clients={clients} />
                
            </main>
        </Container>

    )
}

