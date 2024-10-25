"use client"
import { ClientType } from "@/utils/clients.type"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { NextResponse } from "next/server"
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export function Newcard({ client }: { client: ClientType }) {
    const rout = useRouter()
    async function handleDelete() {

        try {
            const response = await api.delete("/api/cliente", {
                params: {
                    id: client.id
                }

            })
            console.log(response.data)
        } catch (err) {
            console.log("error")
        }
        rout.refresh()
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {client.email}
                </CardContent>

                <CardContent>
                    {client.phone}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleDelete}>
                        Delete
                    </Button>
                </CardFooter>


            </Card>
        </>
    )
}

