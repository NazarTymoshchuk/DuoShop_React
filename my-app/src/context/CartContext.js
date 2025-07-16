import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            console.log(state);
            
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
    const [cart, dispatch] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)