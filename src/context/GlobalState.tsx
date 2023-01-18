import React, { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null); // TODO: remove any

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [toastData, setToastData] = useState({
        open: false,
        text: "",
        color: "#E6FFEB",
    });
    const [loading, setLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ toastData, setToastData, loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export function useGlobalContext() {
    return React.useContext(GlobalContext);
}
