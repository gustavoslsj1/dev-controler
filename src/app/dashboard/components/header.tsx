import { Container } from "@/components/container";
import Link from "next/link";

export default function Heade(){
    return(
        <Container>
            <header className=" gap-4 px-2  my-4 flex py-2 rounded-sm bg-violet-400">
                <Link href="/dashboard/costumer" className="hover:font-bold transition-all duration-200">
                    chamados
                </Link>
                <Link href="/dashboard" className="hover:font-bold transition-all duration-200">
                    clients
                </Link>
            </header>
        </Container>
    )
}