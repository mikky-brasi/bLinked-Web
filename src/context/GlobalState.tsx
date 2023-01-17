import React, { createContext, useState } from "react";

type ToastData = {
    open: boolean;
    text: string;
    color: string;
};

type GlobalContextValue = {
    toastData: ToastData;
    setToastData: React.Dispatch<React.SetStateAction<ToastData>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextValue>(null as any);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [toastData, setToastData] = useState<ToastData>({
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
