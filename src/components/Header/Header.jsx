import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import AddIcon from "@mui/icons-material/Add";
import "./Header.css";
import { useLocation, useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import { toaster } from "../../utils/toast";
import Badge from "@mui/material/Badge";
import HistoryIcon from "@mui/icons-material/History";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "#f3f3f3",
  "&:hover": {
    backgroundColor: "#ffffff",
  },
  marginLeft: 0,
  width: "100%",
  height: "2.5rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  display: "flex",
  alignItems: "center",
}));


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const { auth, cart, wishlist } = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation()

  const [isAddProduct, setIsAddProduct] = useState(false);

  const navigateToHome = () => {
    
      navigate("/home");
    };


  const isAuthenticationRequired = (path) => {
    if (!auth.isLogin) {
      // toaster("info", "login/signup to continue");
      dispatch({ type: "SET_LOGIN_REQUIRED", payload: path });
      return true;
    }

    return false;
  };


  const logout = () => {
    navigate("/");
    localStorage.removeItem("auth");
    localStorage.removeItem("isAdmin");
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "CLEAR_CART" });
  };

  const navigateToCart = () => {
    if (isAuthenticationRequired("/cart")) {
      return true;
    }
    navigate("/cart");
  };

  const navigateToWishlist = () => {
    if (isAuthenticationRequired("/wishlist")) {
      return true;
    }
    navigate("/wishlist");
  };

  const navigateToOrderHistory = () => {
    if (isAuthenticationRequired("/order-history")) {
      return true;
    }
    navigate("/Order-History");
  };

  const user = () => {
    if (isAuthenticationRequired()) {
      return true;
    }
    navigate("/user");
  };

  const handleSubmit = (e) => {
    dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
  };

  return (
    <div className="header">
      <Modal open={isAddProduct} close={() => setIsAddProduct((prev) => !prev)}>
        <AddProduct
          isNew={true}
          close={() => setIsAddProduct((prev) => !prev)}
        />
      </Modal>
      <h3 style={{ cursor: "pointer" }} onClick={navigateToHome}>
        E-KART
      </h3>
      <div className="header_search" onSubmit={handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="action" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{
              "aria-label": "search",
              value: search,
              onChange: handleSubmit,
            }}
          // value={search}
          // onChange={handleSubmit} 
          />
        </Search>
      </div>

      <div className="header_actions">
        {!auth.isLogin && (
          <div
            className="header_login"
            onClick={() => isAuthenticationRequired()}
          >
            Login
          </div>
        )}

        {!auth.isAdmin && (
          <div className="header_icons" onClick={navigateToOrderHistory}>
            <HistoryIcon title="Order History" sx={{ fontSize: 25 }} />
          </div>
        )}

        <Badge badgeContent={wishlist?.products?.length}>
          {!auth.isAdmin && (
            <div className="header_icons" onClick={navigateToWishlist}>
              <FavoriteBorderOutlinedIcon
                title="add to wishlist"
                sx={{ fontSize: 25 }}
              />
            </div>
          )}
        </Badge>
        {!auth.isAdmin && (
          <div className="header_icons" onClick={navigateToCart}>
            <ShoppingBagOutlinedIcon color="white" sx={{ fontSize: 25 }} />
            <span className="cart_quantity">
              {cart?.product?.length ? cart?.product?.length : ""}
            </span>
          </div>
        )}

        {auth.isAdmin && (
          <div
            className="header_icons"
            onClick={() => setIsAddProduct((prev) => !prev)}
          >
            Add Product
            <AddIcon sx={{ fontSize: 25 }} />
          </div>
        )}

        {auth.isLogin && (
          <div className="header_icons" onClick={logout}>
            <PowerSettingsNewOutlinedIcon sx={{ fontSize: 25 }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
