import ProductList from "../components/main/product/productList/ProductList"
import "./styles-pages/ProductsPage.css"

function ProductsPage() {
    return (
        <div className="products-container">
            <div>Filter</div>
            <ProductList />
        </div>
    )
}

export default ProductsPage;