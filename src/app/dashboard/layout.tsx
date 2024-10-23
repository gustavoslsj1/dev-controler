
import Heade from "./components/header";
import { Toaster } from "@/components/ui/toaster";


export default function DashboardLayout({children}: {children:React.ReactNode}){
    return(
       <>
       <Heade/>
       {children}
       <Toaster/>
       </>
    )
}



