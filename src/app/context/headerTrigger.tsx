"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>("");

export function AppWrapper({children}: {children: React.ReactNode}){

    let[headerTrigger, setHeaderTrigger] = useState<boolean>(true)

    return (
        <AppContext.Provider value={{
            headerTrigger,
            setHeaderTrigger
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useHeaderContext() {
    return useContext(AppContext);
}