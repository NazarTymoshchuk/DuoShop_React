import Button from "react-bootstrap/esm/Button";
import { useCart } from "../../context/CartContext"
import Modal from 'react-bootstrap/Modal';
import "./Cart.css"
import { useNavigate } from "react-router-dom";

function CartModal(props) {

    const navigate = useNavigate();

    const {cart, dispatch} = useCart();

    const totalAmount = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)

    function handleClick() {
        navigate("/checkout")
        props.onHide()
    }

    return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Cart
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {cart.length !== 0 ? ( <h4>Products in card: {cart.length} </h4>) : (<h4>Cart is empty</h4>)}

            {cart.map(prod => (
                <div className="product-cart" key={prod.id}>
                    <img src={prod.images[0]} alt="" />
                    <div>
                        <p>{prod.name}</p>
                        <h4>{prod.price}</h4>
                    </div>
                    <div className="cart-quantity">
                        <Button onClick={() => dispatch({ type: "DECREASE", prod })}>-</Button>
                        {prod.quantity}
                        <Button onClick={() => dispatch({ type: "INCREASE", prod })}>+</Button>
                    </div>
                    <Button style={{marginLeft: "auto"}} onClick={() => dispatch({ type: "REMOVE", id: prod.id })}><i class="bi bi-cart-x"></i></Button>
                </div>
            ))}
        </Modal.Body>
        <Modal.Footer style={{justifyContent: "space-between"}}>
            <h3>Total amount: {totalAmount}</h3>
            <Button variant="success" onClick={handleClick}> Confirm Order</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default CartModal;