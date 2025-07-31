import Button from "react-bootstrap/esm/Button";
import { useCart } from "../../context/CartContext"
import Modal from 'react-bootstrap/Modal';
import "./Cart.css"

function CartModal(props) {

    const {cart, dispatch} = useCart();

    const totalAmount = cart.reduce((sum, p) => sum + p.price, 0)

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

            {cart.map(p => (
                <div className="product-cart">
                    <img src={p.images[0]} alt="" />
                    <div>
                        <p>{p.name}</p>
                        <h4>{p.price}</h4>
                    </div>
                    <Button style={{marginLeft: "auto"}} onClick={() => dispatch({ type: "REMOVE", id: p.id })}><i class="bi bi-cart-x"></i></Button>
                </div>
            ))} 
        </Modal.Body>
        <Modal.Footer style={{justifyContent: "space-between"}}>
            <h3>Total amount: {totalAmount}</h3>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default CartModal;