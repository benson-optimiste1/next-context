'use client'
import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!user) {
            const _user = sessionStorage.getItem("user")
            if (_user) {
                setUser(JSON.parse(_user))
            }
        }
    }, [])


    const _setUser = (data) => {
        if (data) {
            sessionStorage.setItem("user", JSON.stringify(data))

        } else {
            sessionStorage.removeItem("user")

        } setUser(data)

    }


    return (
        <AuthContext.Provider value={{ user, setUser: _setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

