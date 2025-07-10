import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function useQuery() {
    return new URLSearchParams(useLocation().search)    
}

function ProductList({filters}) {

    const {categoryname} = useParams();

    const query = useQuery();
    const search = query.get("search")?.toLocaleLowerCase() || ""

    const [sortVariant, setSortVariant] = useState("Default")

    const filteredProducts = products.filter((prod) => (
        prod.price <= filters.maxPrice && 
        prod.name.toLocaleLowerCase().includes(search) && 
        (categoryname ? prod.category?.toLowerCase() === categoryname?.toLowerCase() : true)
    ))

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sortVariant) {
            case "The cheapest":
                return a.price - b.price;
            case "The most expensive":
                return b.price - a.price;
            case "A-Z":
                return a.name.localeCompare(b.name);
            case "Z-A":
                return b.name.localeCompare(a.name);
            default:
                break;
        }
    })


    // filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    // filteredProducts.sort((a, b) => b.price - a.price)

    return (
        <div>
            <Container>
                <div className="sort-container">
                    <p>Sort: </p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" className="sort-menu" id="dropdown-basic">
                            {sortVariant}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSortVariant("The cheapest")}>The cheapest</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("The most expensive")}>The most expensive</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("A-Z")}>A-Z</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("Z-A")}>Z-A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
                <Row className="g-0 inner-border-grid">
                    {sortedProducts.map((product) => (
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