import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(() => {
            const userLS = localStorage.getItem("user")
            return userLS ? JSON.parse(userLS) : null
        }
    )

    function login(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || []
        const userExist = users.find((u) => u.username === username && u.password === password)

        if (userExist) {
            setUser(userExist)
            localStorage.setItem("user", JSON.stringify(userExist))
            return true
        }
        return false 
    }

    function logout() {
        setUser(null)
        localStorage.removeItem("user")
    }

    function register(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || []
        const userExist = users.find((u) => u.username === username)
        if (!userExist) return false

        const newUser = {username, password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        return true
    }

    const isAuth = user !== null

    return (
        <AuthContext.Provider value={{user, login, logout, register, isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)