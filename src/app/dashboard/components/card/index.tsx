import { ClientType } from "@/utils/clients.type"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Newcard({client}:{client:ClientType}) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {client.email}
                </CardContent>
                <CardFooter>
                    {client.phone}
                </CardFooter>

            </Card>
        </>
    )
}