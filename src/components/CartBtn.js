import React from 'react';
import "../styles/cartBtn.scss"
const CartBtn = (props) => {
        const {data}  =props
        return (
        <div className={"cartBtn"}>
            <a className="cart">
                Panier
                <span id={"icone"}>
🛒
</span>
            </a>

            <span className="number">
                {data}
            </span>

        </div>
    );
};

export default CartBtn;
