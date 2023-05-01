import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signup from "./pages/Signup/Signup";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart1 from "./pages/Cart/Cart1";
import Strip_Payment from "./Strip_Payment/Strip_Payment";
import AddressDetails from "./pages/Cart/AddressDetails";
import "./App.css";
import HomeNew from "./pages/HomeNew/HomeNew";
import Intro from "./pages/Intro/Intro";
import Header from "./components/Header/Header";
import BasicModal from "./components/Modal/Modal";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch({ type: "UNSET_LOGIN_REQUIRED" });
  };

  return (
    <React.Fragment>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          {/* {["/home-new", "/login", "/home", "/cart"].includes(
            window.location.pathname,
          ) ? ( */}
          <Header />
          {/* ) : null} */}
          <BasicModal open={auth.isLoginRequired} close={onCancel}>
            <Signup />
          </BasicModal>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home-new" element={<HomeNew />} />
            <Route path="/login" element={<Signup />} />
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
    </React.Fragment>
  );
}

export default App;
