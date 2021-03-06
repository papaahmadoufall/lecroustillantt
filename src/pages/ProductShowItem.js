import React, {useEffect, useState} from 'react';
import '../styles/ProductShowItem.scss'
import {Link, useLocation,useNavigate} from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CartBtn from "../components/CartBtn";
const ProductShowItem = ( props, storeCountCart) => {
    const [menuData, setMenuData] = useState([])
    console.log(useLocation().pathname)
    //increase counter

        const navigate = useNavigate()
        const [counter, updateCounter] = useState(1);

        const handleIncrement = () => {

            updateCounter(counter+ 1);
        };

        const handleDecrement = () => {
            updateCounter(counter <= 1 ? 1 : counter - 1);
        };

    const [cartCount, setCartCount] = useState(0);
    const handleClick = (e) => {
          
        }
         storeCountCart = (value) => {
          setCartCount(value)
        }


        useEffect(() => {
            console.log(counter);
            // updaterandomText(`Random text is updated`);
        }, [counter]);
//     const findProduct = (val) => {
//         console.log( menuData.filter((food) => food.Name.includes(val))
//         )
//     }
        useEffect(() => {
        fetch('menu.json')
            .then(r => r.json())
            .then(json => {
                setMenuData(json)
            })
    }, [])

// useEffect(()=>{
//
// },[])
//     console.log("menudta",menuData,"product",product)
    const location = useLocation();
    const food = location.state
    // const [product,setProduct] = useState()
    //
    // const Product = {};

    return (
<div>
    <Header/>
    <div className="wrap">
        <SearchBar/>
        <CartBtn data ={cartCount}/>
    </div>
    { food &&

            <div className={"container-card animated animatedFadeInUp fadeInUp"}>

        <div className={"card-product"}>
            <div className="back">
                <Link to={"/"}>
                    <img id={"back"} src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png"/>
                </Link>
            </div>
            <div className="img">
                <img src={food.ImgUrl} alt=""/>
            </div>

            <div className="name">

                    <div id={"name"}>{food.Name}</div>
                    <div className={"price"}>{food.Price}fcfa</div>


            </div>
            <form onSubmit={e=> {
                e.preventDefault();
                setCartCount(counter);
                storeCountCart(cartCount);

            }
            } >
            <div className="number">
                                <span onClick={() => {
                                    handleDecrement()
                                    console.log(counter)
                                }

                                } className="minus">-</span>
                <input
                    required
                    onChange={(e) => {
                        updateCounter(e.target.value === "" ? 1 : parseInt(e.target.value))
                    }                }
                    id={"number"} type="text" placeholder={"Combien de " + food.Name + " ?"} value={counter}/>
                <span onClick={() => {
                    handleIncrement()
//                                console.log(counter)
                }

                } className="plus">+</span>
            </div>
            <div className={"montant"}>
                <p><span>Montant:</span> {food.Price*counter} fcfa</p>
            </div>
            <div className="btn-command">
                <button onClick={handleClick} >Commander</button>
            </div>
            </form>
        </div>
        <div className="otherFood">
            <div className="title">

            <h1>Dans la m??me cat??gorie</h1>

            </div>
            {
                menuData
                    .filter((item) => item.Category.includes(food.Category))
                    .slice(0, 4)
                    .map((foodFound) => {
                        if (foodFound.Name !== food.Name) {
                            return <ProductItem item={foodFound} key={foodFound.Name}/>
                        }
                    })
            }

        </div>

    </div>
}
    {!food&&

    navigate('/')
    }


</div>
    );
};

export default ProductShowItem;
