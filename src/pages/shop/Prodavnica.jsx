import React from "react";
import {PROIZVODI} from "../../proizvodi";
import { Product } from "./Proizvod";
import{BsHandbagFill} from "react-icons/bs"
import './prodavnica.css';
export const Shop = () => {
    return(
        <div className = "shop">
            <div id = "title" className="shopTitle">
             <h1 className="h1">Handbag Heaven <BsHandbagFill></BsHandbagFill></h1>
            </div>
            <div className="products">
                {PROIZVODI.map((product)=>(
                <Product data={product}/>))}
            </div>
        </div>
    );
} ;