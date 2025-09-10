import Button from "react-bootstrap/esm/Button";
import { useCart } from "../context/CartContext";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CheckoutPage() {

    const [city, setCity] = useState("");
    const [branch, setBranch] = useState([]);
    const [postomat, setPostomat] = useState([]);
    const [dropOff, setDropOff] = useState([]);

    const fetchWarehouses = async () => {

        try {
        const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                apiKey: "c8f63dec769e505d10494b3dbc3a6dba", // 🔑 встав свій ключ
                modelName: "Address",
                calledMethod: "getWarehouses",
                methodProperties: {
                    CityName: city,
                    Language: "UA"
                }
            })
        });

        const data = await response.json();
        if (data.success) {
            
            const branches = data.data.filter(el => el.CategoryOfWarehouse === "Branch");
            const postomats = data.data.filter(el => el.CategoryOfWarehouse === "Postomat");
            const dropOff = data.data.filter(el => el.CategoryOfWarehouse === "DropOff");

            setBranch(branches);
            setPostomat(postomats);
            setDropOff(dropOff);
            
        } else {
            alert("Помилка: " + JSON.stringify(data.errors));
        }
        } catch (error) {
        console.error("Помилка при запиті:", error);
        }
    };

    const navigate = useNavigate();
    const {cart, dispatch} = useCart();

    const {addOrder} = useAuth()
    
    const totalAmount = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        payment: "card"
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form);
        
        if(!form.name || !form.surname || !form.email || !form.phone || !form.address || !form.payment) {
            alert("Please, fill all fields")
            return
        }

        addOrder(cart, form, totalAmount)

        dispatch({ type: "UPDATE", products: []})
        navigate("/products")
    }


    return (
        <div>
            <h2>Ordering</h2>

            <h4>Total amount: {totalAmount}</h4>

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

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, "name": e.target.value})} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Surname" value={form.surname} onChange={(e) => setForm({...form, "surname": e.target.value})}/>
                        </Form.Group>
                    </Col>
                </Row>   

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, "email": e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, "phone": e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({...form, "address": e.target.value})}/>
                </Form.Group>
                
                <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введіть місто"
                style={{marginBottom: "10px"}}
                />
                <Button onClick={fetchWarehouses} disabled={!city}>
                    Знайти
                </Button>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Branch</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        {branch.map((w) => (
                            <option key={w.Ref}>{w.Description}</option>
                        ))}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Postomat</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        {postomat.map((w) => (
                            <option key={w.Ref}>{w.Description}</option>
                        ))}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Dropoff</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        {dropOff.map((w) => (
                            <option key={w.Ref}>{w.Description}</option>
                        ))}
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group>
                    <Form.Label>Payment</Form.Label>
                    <Form.Select defaultValue="Card" value={form.payment} onChange={(e) => setForm({...form, "payment": e.target.value})}>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Confirm Order
                </Button>
            </Form>
        </div>
    )
}

export default CheckoutPage;