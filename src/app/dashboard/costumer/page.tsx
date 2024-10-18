import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Costumer(){
    const session= await getServerSession(authOptions)

    if(!session || !session.user){
        redirect("/")
    }

    return(
        <Container>
            oiiii
        </Container>
    )
}