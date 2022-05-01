import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div>
            PANIER <br/>
            <Link to={"/"}> retour</Link>
        </div>
    );
};

export default Cart;
