import products from "../../../../data/products"
import ProductItem from "../productItem/ProductItem"

function ProductList() {
    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductList;