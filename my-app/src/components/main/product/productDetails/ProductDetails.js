import Carousel from 'react-bootstrap/Carousel';
import products from '../../../../data/products';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"

function ProductDetails() {

    const { id } = useParams();

    const product = products.find((prod) => prod.id == id)

    return (
        <div className='container-details'>
            <Carousel variant='dark'>
                {product.images.map((img) => (
                    <Carousel.Item>
                        <img className='img-c' src={img} alt="" />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductDetails;