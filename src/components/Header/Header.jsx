import React from "react"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Header.css"
import { useNavigate } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "10px",
    backgroundColor: "#f3f3f3",
    '&:hover': {
        backgroundColor: "#ffffff"
    },
    marginLeft: 0,
    width: '100%',
    height: "2.5rem",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const Header = props => {
    const navigate = useNavigate() 

    const logout = () => {
        navigate("/")
    }

    return (
        <div>

            <div className="header">

                <img className="header_image" src="/app-logo.jpg" alt="logo" />
                <h1 className="header_heading">Products</h1>
                <div className="header_search">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color="action" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for products…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>


                <div className="header_icons" style={{ marginRight: '2.5rem' }}>
                    <Person2OutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                    <p>User</p>
                </div>


                <div className="header_icons" style={{ marginRight: '2.5rem' }}>
                    <FavoriteOutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                    <p>Wishlist</p>
                </div>

                <div className="header_icons">
                    <AddShoppingCartOutlinedIcon color="white" sx={{ fontSize: 20, color: 'white' }} />
                    <p>Cart</p>
                    <span className="cart_quantity">1</span>
                </div>

                <div className="header_icons" style={{ marginLeft: '1.5rem' }} onClick={logout}>
                    <PowerSettingsNewOutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                    <p>Log Out</p>
                </div>

            </div>


            <div className="catagory">
                <div className="catagory_icons" style={{ marginRight: '2.5rem' }}>
                    <MenuOutlinedIcon sx={{ fontSize: 20, color: 'green' }} />
                    <p className="filter">Filter</p>
                </div>
                
                <h4 className="catagory1">Electronics</h4>
                <h4 className="catagory2">Home & Furniture</h4>
                <h4 className="catagory3">Men</h4>
                <h4 className="catagory4">Women</h4>
                <h4 className="catagory5">Baby & Kids</h4>
                <h4 className="catagory6">Grocery</h4>
            </div>

           
        </div>
    )
}


export default Header
