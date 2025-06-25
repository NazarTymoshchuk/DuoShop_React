import './App.css';
import HeaderBar from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Container from 'react-bootstrap/esm/Container';
import ProductDetails from './components/main/product/productDetails/ProductDetails';

function App() {
  
  return (
    <div>
      <HeaderBar />
      
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
