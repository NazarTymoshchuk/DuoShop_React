import './App.css';
import HeaderBar from './components/header/Header';
import ProductList from './components/main/product/productList/ProductList';
import { Layout, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  padding: '30px'
};

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

function App() {
  return (
    <Layout>
      <HeaderBar />
      <Layout>
        <Sider width="15%" style={siderStyle}>
          <Button color="cyan" variant="solid"> Click Me! </Button>
        </Sider>
        <Content style={contentStyle}> <ProductList /> </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
