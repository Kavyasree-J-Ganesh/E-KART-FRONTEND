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

    const cart = () => {
        navigate("/cart")
    }

    const wishlist = () => {
        navigate("/wishlist")
    }

    const user = () => {
        navigate("/user")
    }

return (

        <div className="header">

            <img className="header_image" src="/app-logo.jpg" alt="logo" style={{cursor:"pointer"}} 
             onClick={()=> navigate("/home")}/>
            <div className="header_search">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="action" />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>


            <div className="header_icons" style={{ marginRight: '1rem' }} onClick={user}>
                <Person2OutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                <p>User</p>
            </div>


            <div className="header_icons" style={{ marginRight: '1rem' }} onClick={wishlist}>
                <FavoriteOutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                <p>Wishlist</p>
            </div>

            <div className="header_icons" onClick={cart}>
                <AddShoppingCartOutlinedIcon color="white" sx={{ fontSize: 20, color: 'white' }} />
                <p>Cart</p>
                <span className="cart_quantity">1</span>
            </div>

            <div className="header_icons" style={{ marginLeft: '1rem' }} onClick={logout}>
                <PowerSettingsNewOutlinedIcon sx={{ fontSize: 20, color: 'white' }} />
                <p>Log Out</p>
            </div>

        </div>
)
}



export default Header
