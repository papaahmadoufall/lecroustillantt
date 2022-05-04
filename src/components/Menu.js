import React, {useState} from 'react';
import "../styles/Menu.scss"
import Home from "../pages/Home";
import ProductShowItem from "../pages/ProductShowItem";
import Cart from "../pages/Cart";
import AboutUS from "../pages/AboutUS";
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
const Menu = () => {
    const pathRootUrl = [{label:"Acceuil",pathUrl:"#",component:<Home />},{label:"Explorez nos plats",pathUrl:"/",component:<Home />},{label:"",pathUrl:"/productShow/:Id",component:< ProductShowItem/>},{label:"Commandes",pathUrl:"/panier",component:<Cart />},{label:"Contactez-nous",pathUrl:"/about",component:<AboutUS />},]
    return (
        <>

        <div  className={"menu "}>
            <ul className="nav-list">
            {
                pathRootUrl
                    .map((path
                        )=> <Fade  key={path.label} ><li className="nav-list-item"><Link className={'link'} to = {path.pathUrl}> {path.label} </Link> </li> </Fade>
                    )
            }
            </ul>
            <div className="social-network">
                <img src="https://res.cloudinary.com/lecroustillant/image/upload/v1651096020/image-le-croustillant%20/icons8-whatsapp_pqz4jr.gif"/>
                <img src="https://res.cloudinary.com/lecroustillant/image/upload/v1651096151/image-le-croustillant%20/icons8-facebook-entour%C3%A9_rtumoe.gif"/>
            </div>
        </div>
        </>
    );
};

export default Menu;
