import {  ReactNode } from "react"
export function Container ({children}: {children:ReactNode} ){
    return(
        <div className="w-full px-2">
            {children}
        </div>
    )
}