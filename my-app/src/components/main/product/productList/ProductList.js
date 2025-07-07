import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search)    
}

function ProductList({filters}) {

    const {categoryname} = useParams();

    console.log(categoryname);

    const query = useQuery();
    const search = query.get("search")?.toLocaleLowerCase() || ""

    const filteredProducts = products.filter((prod) => (
        prod.price <= filters.maxPrice && 
        prod.name.toLocaleLowerCase().includes(search) && 
        (categoryname ? prod.category?.toLowerCase() === categoryname?.toLowerCase() : true)
    ))

    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    filteredProducts.sort((a, b) => b.price - a.price)

    return (
        <div>
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