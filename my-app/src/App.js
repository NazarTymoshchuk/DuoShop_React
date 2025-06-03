import './App.css';
import HeaderBar from './components/header/Header';
import ProductList from './components/main/product/productList/ProductList';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <ProductList />
    </div>
  );
}

export default App;
