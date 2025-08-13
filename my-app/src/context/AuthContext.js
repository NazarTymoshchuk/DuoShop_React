import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    function login(username) {
        const newUser = {name: username}
        setUser(newUser)
    }

    function logout() {
        setUser(null)
    }

    const isAuth = user !== null

    return (
        <AuthContext.Provider value={{user, login, logout, isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)