import './App.css';
import HeaderBar from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Container from 'react-bootstrap/esm/Container';
import ProductDetails from './components/main/product/productDetails/ProductDetails';
import Cart from './components/cart/Cart';

function App() {
  
  return (
    <div>
      <HeaderBar />
      
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:categoryname' element={<ProductsPage />} />
          <Route path='/products/detail/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
