import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Signup from "./pages/Signup/Signup";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Strip_Payment from "./Strip_Payment/Strip_Payment";
import AddressDetails from "./pages/Cart/AddressDetails";
import './App.css';
import HomeNew from "./pages/HomeNew/HomeNew";
import Intro from "./pages/Intro/Intro";
import Header from "./components/Header/Header";
import BasicModal from "./components/Modal/Modal";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { useState } from "react";
import { useEffect } from "react";
import SaleAnalysis from "./pages/SaleAnalysis/SaleAnalysis";
import AddandDeleteAddress from "./pages/Cart/AddandDeleteAddress";


function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [path, setPath] = useState("/")
  const [search, setSearch] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const isAdmin = localStorage.getItem("isAdmin") == "true"
    if (auth) {
      dispatch({ type: "LOGIN", payload: { isAdmin } })
    }
  }, [])

  const onCancel = () => {
    dispatch({ type: "UNSET_LOGIN_REQUIRED" })
  }

  window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    setPath(window.location.pathname)
  });

  return (
    <React.Fragment>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <BasicModal open={auth.isLoginRequired} close={onCancel}>
            <Signup />
          </BasicModal>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home-new" element={<React.Fragment><Header /><HomeNew /></React.Fragment>} />
            <Route path="/login" element={<Signup />} />
            <Route path="/home" element={<React.Fragment><Header setSearch={setSearch} search={search} /><Homepage search={search} /></React.Fragment>} />
            <Route path="/home/:id" element={<React.Fragment><Header /><ProductDetails /></React.Fragment>} />
            <Route path="/cart" element={<React.Fragment><Header /><Cart /></React.Fragment>} />
            <Route path="/choose-address" element={<React.Fragment><Header /><AddandDeleteAddress /></React.Fragment>} />

            <Route path="/address" element={<React.Fragment><Header /><AddressDetails /></React.Fragment>} />
            <Route path="/add-product" element={<React.Fragment><Header /><AddProduct /></React.Fragment>} />
            <Route path="/wishlist" element={<React.Fragment><Header /><Wishlist /></React.Fragment>} />
            <Route path="/payment" element={<React.Fragment><Header /><Strip_Payment /></React.Fragment>} />
            <Route path="/checkout" element={<React.Fragment><Header /><Checkout /></React.Fragment>} />
            <Route path="/sale_analysis" element={<React.Fragment><Header /><SaleAnalysis /></React.Fragment>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>


  );
}

export default App;


