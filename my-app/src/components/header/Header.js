import logo from "../../images/IMG_20250527_174328_473_1.png"
import "./Header.css"
import { Input, Space } from 'antd';
import { Layout, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header } = Layout;

const { Search } = Input;

function HeaderBar() {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="" />

                <Search
                className="search-bar"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="default"
                />

                <Menu
                theme="dark"
                mode="horizontal"   
                defaultSelectedKeys={['1']}
                items={[
                    { key: '1', label: 'Головна' },
                    { key: '2', label: 'Про нас' },
                    { key: '3', label: 'Контакти' },
                ]}
                />
            </Header>
        </Layout>
    )
}

export default HeaderBar