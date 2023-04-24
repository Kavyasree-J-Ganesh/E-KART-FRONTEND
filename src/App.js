import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Wishlist from './pages/Wishlist/Wishlist';
import { ClassNames } from '@emotion/react';
import Cart from './pages/Cart/Cart';
import Cart1 from './pages/Cart/Cart1';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home/:id" element={<ProductDetails />} />
          <Route path="/wishlist/" element={<Wishlist />} />
          <Route path="/cart/" element={<Cart1 />} />

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;


