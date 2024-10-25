import { Container } from "@/components/container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiFile, FiTrash2 } from "react-icons/fi"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }
    return (
        <Container>
            <main className="mt-9 px-4">
                <div className="flex justify-between mb-2">
                    <h1 className="font-bold text-3xl">
                        Chamados
                    </h1>
                    <Button>
                        <Link href="/dashboard/chamados">
                            Abrir chamado
                        </Link>
                    </Button>

                </div>

                <Table>
                    <TableCaption>Uma lista de seus chamados .</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">CLIENTE</TableHead>
                            <TableHead>DATA CADASTRO</TableHead>
                            <TableHead>STATUS</TableHead>
                            <TableHead className="text-right">#</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">STATUS</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell><span className="bg-green-700 p-1 rounded-sm">ABERTO    </span> </TableCell>
                            <TableCell className="text-right">
                                <button className="mr-2">
                                    <FiTrash2 size={22} color="red"/>
                                </button>
                                <button>
                                    <FiFile size={22} color="purple"/>
                                </button>


                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


            </main>
        </Container>
    )
}