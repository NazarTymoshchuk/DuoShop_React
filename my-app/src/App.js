import './App.css';
import HeaderBar from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Container from 'react-bootstrap/esm/Container';
import ProductDetails from './components/main/product/productDetails/ProductDetails';
import Cart from './components/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/authorization/LoginPage';
import PrivateRoute from './components/privateRoutes/PrivateRoute';
import RegisterPage from './pages/authorization/RegisterPage';
import ProfilePage from './pages/ProfilePage';

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
          <Route path='/checkout' element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
            } />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
