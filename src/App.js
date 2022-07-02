import './App.css';
import { Route , Routes , Navigate} from 'react-router-dom';

//Component
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/products' element={<Store/>}/>
          <Route path='/Cart' element={<ShopCart/>}/>
          <Route path='/*' element={<Navigate to='/products'/>}/>
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
