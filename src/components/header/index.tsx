"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { FiUser, FiLogOut, FiLoader } from "react-icons/fi"
import { BiLogIn } from "react-icons/bi";
export function Header() {
    async function handleLogin() {
        await signIn()
    }

    async function handleLogout() {
        await signOut()
    }
    const { status, data } = useSession()
    return (
        <header className="w-full px-4 py-4">
            <div className="flex w-full mx-auto justify-between shadow-sm py-2 px-1">

                <h1 className="font-bold text-2xl pl-1 hover:tracking-widest transition-all duration-3000">
                    <span className=" text-violet-700">dev</span>controler
                </h1>

                {status === "unauthenticated" && (
                    <div>
                        <button onClick={handleLogin}>
                            <BiLogIn size={22} />
                        </button>
                    </div>
                )}

                {status === "loading" && (
                    <FiLoader size={22} color="purple" className="animate-spin" />
                )}

                {status === "authenticated" && (
                    <div className="flex justify-center items-center gap-4">
                        <Link href="/dashboard">
                            <FiUser size={22} />
                        </Link>

                        <button onClick={handleLogout}>
                            <FiLogOut size={22} />
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}