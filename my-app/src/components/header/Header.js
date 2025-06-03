import logo from "../../images/IMG_20250527_174328_473_1.png"
import "./Header.css"
import { Input, Space } from 'antd';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const { Search } = Input;

function HeaderBar() {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="" />

                <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
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