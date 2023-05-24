import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

//components
import Store from './Components/Store';
import ProductsDetails from './Components/ProductsDetails';
import Navbar from './Components/Shared/Navbar';
import ShopCart from './Components/Shared/ShopCart';

//Context
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';



function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
 
  )
}

export default App
