import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ProductList() {
    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;