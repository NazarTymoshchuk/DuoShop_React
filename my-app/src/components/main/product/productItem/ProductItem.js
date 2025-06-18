import "./ProductItem.css"

function ProductItem({img, name, price}) {
    return (
        <div className="card-product">
            <img className="card-img" src={img} alt="" />
            <h3>{name}</h3>
            <p>{price} UAH</p>
        </div>
    )
}

export default ProductItem;