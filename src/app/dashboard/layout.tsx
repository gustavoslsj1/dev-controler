import Heade from "./components/header";


export default function DashboardLayout({children}: {children:React.ReactNode}){
    return(
       <>
       <Heade/>
       {children}
       </>
    )
}