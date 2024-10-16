import Link from "next/link"

import { FiUser, FiLogOut } from "react-icons/fi"
export function Header() {
    return (
        <header className="w-full px-4 py-4">
            <div className="flex w-full mx-auto justify-between shadow-sm py-2 px-1">
                <h1 className="font-bold text-2xl pl-1 hover:tracking-widest transition-all duration-3000">
                    <span className=" text-violet-700">dev</span>controler
                </h1>

                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <FiUser size={22} />
                    </Link>

                    <button>
                        <FiLogOut size={22} />
                    </button>
                </div>
            </div>
        </header>
    )
}