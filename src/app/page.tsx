import Image from "next/image";
import { Container } from "../components/container";
import heroImg from "@/public/hero.svg"
export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center ">
      <h2 className="font-bold text-2xl mb-3">gerencie sua empresa </h2>
      <h1 className=" font-bold text-3xl mb-8 text-blue-600">Atendimentos, clientes</h1>

      <Image src={heroImg} alt="oioi" width={600} className=" max-w-sm md:max-w-xl"/>

    </main>
  );
}
