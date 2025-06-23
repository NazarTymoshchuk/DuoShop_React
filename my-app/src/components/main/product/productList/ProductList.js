import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList() {
    return (
        <Container>
            <Row className="g-0 inner-border-grid">
                {products.map((product) => (
                    <Col key={product.id} xxl={3} xl={4} md={6}>
                        <ProductItem {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;