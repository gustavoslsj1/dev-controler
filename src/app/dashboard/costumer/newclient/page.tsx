import { Container } from "@/components/container";
import { InputForm } from "../../components/form";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewClient() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }
    return (
        <Container>
            <main className="mx-4">
                <header className="flex gap-5 my-3" >
                    <Button>
                        Voltar
                    </Button>

                    <h1 className="font-bold text-3xl">Novo Cliente</h1>
                </header>
                <InputForm />
            </main>
        </Container>

    )
}