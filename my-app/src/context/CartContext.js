import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext()

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.product]
        
        case "REMOVE":
            return state.filter(p => p.id !== action.id)
        
        case "UPDATE":
            return action.products;
        default:
            return state;
    }
}

export function CartProvider({children}) {

    const initCart = () => {
        const cartLS = localStorage.getItem("cart")
        return cartLS ? JSON.parse(cartLS) : []
    }

    const [cart, dispatch] = useReducer(cartReducer, [], initCart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)