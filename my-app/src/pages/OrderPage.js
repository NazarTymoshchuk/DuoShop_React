import { useAuth } from "../context/AuthContext";
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import "./styles-pages/OrderPage.css"

function OrderPage() {

    const {user} = useAuth()

    const [openOrders, setOpenOrders] = useState({});

    const toggleOrder = (orderId) => {
        setOpenOrders((prev) => ({
            ...prev,
            [orderId]: !prev[orderId], // змінюємо тільки для конкретного замовлення
        }));
    };

    return (
        <div>
            <h2>Order Page</h2>

            {user.orders.length === 0 ? "No orders yet" : 
                <div>
                    <div className="order-header">
                        <div>Date</div>
                        <div>Address</div>
                        <div>Total Amount</div>
                        <div></div>
                    </div>
                    <hr className="order-hr"/>
                    {user.orders.map((o) => (
                        <div>
                            <div className="order-container">
                                <div className="order-id">№ {o.id}</div>
                                <hr />
                                <div className="order-info">
                                    <div>{o.date}</div>
                                    <div>{o.address}</div>
                                    <div>{o.totalAmount}</div>
                                    <Button
                                        onClick={() => toggleOrder(o.id)}
                                        variant="outline-light"
                                        className="btn-order"
                                        aria-expanded={!!openOrders[o.id]}
                                    >
                                        Details <i class="bi bi-chevron-down"></i>
                                    </Button>
                                </div>
                                <Collapse in={!!openOrders[o.id]}>
                                    <div>
                                        <hr />
                                        <div className="order-products-header">
                                            <div></div>
                                            <div>Title</div>
                                            <div>Quantity</div>
                                            <div>Amount</div>
                                        </div>
                                        {o.orderProducts.map((p) => (
                                            <div className="order-products">
                                                <img src={p.images[0]} alt="" />
                                                <div>{p.name}</div>
                                                <div>{p.quantity}</div>
                                                <div>{p.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
                }

            
        </div>
    )
}

export default OrderPage;