import "./ProductItem.css"
import { Link } from 'react-router-dom';

function ProductItem({id, img, name, price}) {
    return (
        <div className="card-product">
            <Link className="card-link" to={`/products/${id}`}>
                <img className="card-img" src={img} alt="" />
                <h3>{name}</h3>
                <p>{price} UAH</p>
            </Link>    
        </div>
    )
}

export default ProductItem;