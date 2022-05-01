import React from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/ProductItem.scss"
const ProductItem = (props) => {
    const {item} = props
    const navigate = useNavigate()
    return (
        <div
            onClick={()=>{
                navigate('/product',{state:item})
            }}
                            className={item.hasOwnProperty("ImgUrl") === true & item.ImgUrl!=="" ? "card big" : "card small"  }
                            >
                        {
                item.hasOwnProperty('ImgUrl') &&
                            (
                <div className={"img"}>
                    <img key={item.ImgUrl}  src={item.ImgUrl} className="img-item"/>
                </div>
                            )
            }
            <div className={"name"} >{item.Name}</div>
            <div className="price">{item.Price} <small>fcfa</small></div>
        </div>
    );
};
export default ProductItem;
