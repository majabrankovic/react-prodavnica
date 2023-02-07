import React from "react";
import {PROIZVODI} from "../../proizvodi";
import { Product } from "./Proizvod";
import './prodavnica.css';
export const Shop = () => {
    return(
        <div className = "shop">
            <div className="shopTitle">
             <h1>PRODAVNICA ODECE "MODERN SHOP"</h1>
            </div>
            <div className="products">
                {PROIZVODI.map((product)=>(
                <Product data={product}/>))}
            </div>
            </div>
    );
} ;