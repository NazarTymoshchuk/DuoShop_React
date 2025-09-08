import { useAuth } from "../context/AuthContext";
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import "./styles-pages/OrderPage.css"

function OrderPage() {

    const {user} = useAuth()

    const [open, setOpen] = useState(false);

    return (
        <div>
            <h2>Order Page</h2>

            {user.orders.length === 0 ? "No orders yet" : 
                user.orders.map((o) => (
                    <div>
                        <div className="order-info">
                            <div>{o.id}</div>
                            <div>{o.date}</div>
                            <div>{o.address}</div>
                            <div>{o.totalAmount}</div>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                click
                            </Button>
                        </div>
                        <Collapse in={open}>
                            <div>
                                {o.orderProducts.map((p) => (
                                    <div>
                                        <div>{p.name}</div>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                    
                ))
            }

            
        </div>
    )
}

export default OrderPage;