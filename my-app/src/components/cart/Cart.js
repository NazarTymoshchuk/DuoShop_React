import { useCart } from "../../context/CartContext"


function Cart() {

    const {cart, dispatch} = useCart();

    return (
        <div>
            <h2>Cart</h2>

            {cart.map(p => (
                <div>
                    <p>{p.name}</p>
                    <p>{p.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart;