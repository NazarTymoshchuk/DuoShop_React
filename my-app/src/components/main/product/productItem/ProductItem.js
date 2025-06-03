import "./ProductItem.css"
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

function ProductItem({img, name, price}) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
            <img className='card-img'
                alt="example"
                src={img}
            />
            }
            actions={[
            <ShoppingCartOutlined />
            ]}
        >
            <Meta
            title="Card title"
            description="This is the description"
            />
        </Card>
    )
}

export default ProductItem;