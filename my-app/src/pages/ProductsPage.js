import ProductList from "../components/main/product/productList/ProductList"
import FilterBar from "../components/main/filter/FilterBar";
import "./styles-pages/ProductsPage.css"
import { useState } from "react";
import products from "../data/products";
import { useLocation } from "react-router-dom";


function ProductsPage() {

    const query = new URLSearchParams(useLocation().search)

    const maxPriceProduct = Math.max(...products.map(p => p.price))

    const queryMaxPrice = Number(query.get("maxprice")) || maxPriceProduct


    const [filters, setFilters] = useState({
        maxPrice: queryMaxPrice,
        category: "",
        producer: ""
    })
    

    return (
        <div className="products-container">
            <FilterBar filters={filters} setFilters={setFilters} maxPriceProduct={maxPriceProduct}/>
            <ProductList filters={filters} maxPriceProduct={maxPriceProduct}/>   
        </div>
    )
}

export default ProductsPage;