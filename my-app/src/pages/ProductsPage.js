import ProductList from "../components/main/product/productList/ProductList"
import FilterBar from "../components/main/filter/FilterBar";
import "./styles-pages/ProductsPage.css"
import { useState } from "react";
import products from "../data/products";


function ProductsPage() {

    const maxPriceProduct = Math.max(...products.map(p => p.price))


    const [filters, setFilters] = useState({
        maxPrice: maxPriceProduct,
        category: "",
        producer: ""
    })
    

    return (
        <div className="products-container">
            <FilterBar filters={filters} setFilters={setFilters} maxPriceProduct={maxPriceProduct}/>
            <ProductList filters={filters}/>   
        </div>
    )
}

export default ProductsPage;