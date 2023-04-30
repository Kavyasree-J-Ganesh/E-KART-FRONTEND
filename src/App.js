import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Signup from "./pages/Signup/Signup";
import Homepage from "./pages/Homepage/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart1 from "./pages/Cart/Cart1";
import Strip_Payment from "./Strip_Payment/Strip_Payment";
import AddressDetails from "./pages/Cart/AddressDetails";
import './App.css';
import Checkout from "./pages/Checkout/Checkout";

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart1 />} />
          <Route path="/address" element={<AddressDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/payment" element={<Strip_Payment />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


