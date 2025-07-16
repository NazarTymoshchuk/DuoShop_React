import Button from "react-bootstrap/esm/Button";
import "./ProductItem.css"
import { Link } from 'react-router-dom';
import { useCart } from "../../../../context/CartContext";

function ProductItem({product}) {

    const {dispatch} = useCart()

    return (
        <div className="card-product">
            <Link className="card-link" to={`/products/detail/${product.id}`}>
                <img className="card-img" src={product.images[0]} alt="" />
                <h3>{product.name}</h3>
                <p>{product.price} UAH</p>
            </Link>
            <Button onClick={() => dispatch({ type: "ADD", product })}><i class="bi bi-cart-plus"></i></Button>
        </div>
    )
}

export default ProductItem;