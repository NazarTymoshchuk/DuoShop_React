import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext()

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const existProduct = state.find(p => p.id === action.product.id)
            
            console.log(state);
            

            if (existProduct) {
                return state.map(p => p.id === action.product.id ? {...p, quantity: p.quantity + 1} : p)    
            }
            
            return [...state, {...action.product, quantity: 1}]
        
        case "INCREASE":
            return state.map(p => p.id === action.prod.id ? {...p, quantity: p.quantity + 1} : p)

        case "DECREASE":
            return state.map(p => p.id === action.prod.id ? {...p, quantity: p.quantity - 1} : p)


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