import React from "react";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {GiBeachBag} from "react-icons/gi"
import "./navbar.css";
export const Navbar = () => {
    return <div className="navbar">
        <div className="Links">
            <Link style={{fontSize:"40px", pointerEvents: 'none'}}> <GiBeachBag></GiBeachBag>HANDBAG HEAVEN </Link>
            <Link to ="/"> Prodavnica </Link>
            <Link to='/kontakt'>Kontakt</Link>
            <Link to='/onama'>O nama</Link>
            <Link to="/cart"><ShoppingCartIcon /> </Link>
        </div>
    </div>;
};