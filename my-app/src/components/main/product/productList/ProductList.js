import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"
import "./ProductList.css"

function ProductList() {
    return (
        <div className="productContainer">
            {products.map((product) => (
                <ProductItem key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductList;