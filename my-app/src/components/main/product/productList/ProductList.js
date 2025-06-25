import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function ProductList() {

    const maxPriceProduct = Math.max(...products.map(p => p.price))

    const [maxPrice, setMaxPrice] = useState(maxPriceProduct)

    const filteredProducts = products.filter(prod => prod.price <= maxPrice)
    

    return (
        <div className="products-container">
            <div>
                <Form.Range 
                    max={maxPriceProduct}
                    min="0"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <h3>{maxPrice}</h3>
            </div>
            <Container>
                <Row className="g-0 inner-border-grid">
                    {filteredProducts.map((product) => (
                        <Col key={product.id} xxl={3} xl={4} md={6}>
                            <ProductItem {...product} />
                        </Col>
                    ))} 
                </Row>
            </Container>
        </div>     
    )
}

export default ProductList;