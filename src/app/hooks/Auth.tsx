'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type AuthenticationData = {
    token?: string;
}

interface AuthContextProps {
    data: AuthenticationData,
    setData: Dispatch<SetStateAction<AuthenticationData>>
}

const AuthContext = createContext<AuthContextProps>({
    data: { token: '' },
    setData: () => {}
});

export const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [data, setData] = useState<AuthenticationData>({ });
    const tokenPresent = () => !!data.token;

    return <AuthContext.Provider value={{ data, setData }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);