import "./ProductItem.css"
import { Link } from 'react-router-dom';

function ProductItem({id, images, name, price}) {
    return (
        <div className="card-product">
            <Link className="card-link" to={`/products/detail/${id}`}>
                <img className="card-img" src={images[0]} alt="" />
                <h3>{name}</h3>
                <p>{price} UAH</p>
            </Link>
        </div>
    )
}

export default ProductItem;