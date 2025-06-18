import Carousel from 'react-bootstrap/Carousel';
import products from '../../../../data/products';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { id } = useParams();

    const product = products.find((prod) => prod.id == id)

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://img.ktc.ua/img/base/1_505/5/303025.webp" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://img.ktc.ua/img/base/1_505/5/303025.webp" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://img.ktc.ua/img/base/1_505/5/303025.webp" alt="" />
                </Carousel.Item>
            </Carousel>
            <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductDetails;