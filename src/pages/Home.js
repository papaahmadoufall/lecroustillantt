import React, {Fragment, useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Home.scss'
import Header from '../components/Header';
import ProductItem from "../components/ProductItem";
import SliderComponent from "../components/SliderComponent";
import SearchBar from "../components/SearchBar";
// import ProductShowItem from "./ProductShowItem";
// import {Link, useNavigate} from "react-router-dom";

function Home() {
    // const navigate = useNavigate()
    // const  showProduct=(url,props)=> {
    //     let path = "/"+url+"/:"+props
    //     navigate(path,{state:props})
    // }
    let categoryArr = ['Best seller'], sliderArr = []
    const [filterArg, setFilterArg] = useState("Best seller")
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(r => r.json())
            .then(json => {
                setMenuData(json)
                console.log(menuData)
            })
    }, [])

    const categoryMap = () => {
        /*
            only add catégorie for button label
        */
        menuData.map((item) => {
                if (!categoryArr.includes(item.Category.toLowerCase())) {
                    // ✅ only add categoryArr of product in arr
                    categoryArr.push(item.Category);
                }
            }
        )
    };
    categoryMap()
    const slider = (  ) => {
        menuData.map(item => {
            if (item.IsBestSeller === true) {
                if(item.hasOwnProperty("ImgUrl") && item.ImgUrl !== "" ){
                    sliderArr.push(item)

                }
            }
        })
    };slider()
    const categoryLabelArr = [
        {categorName:"Best seller",categoryIcon:"https://cdn-icons-png.flaticon.com/512/1021/1021214.png?w=740"},
        {categorName:"salé",categoryIcon:"https://res.cloudinary.com/lecroustillant/image/upload/v1650928467/icons8-cheeseburger-64_yx2m0y.png"},
        {categorName:"sucré",categoryIcon:"https://res.cloudinary.com/lecroustillant/image/upload/v1650929850/icons8-donut-64_r1ooyt.png"},
        {categorName:"jus",categoryIcon:"https://res.cloudinary.com/lecroustillant/image/upload/v1650930204/icons8-drink-60_jsljmw.png"},
        {categorName:"boisson",categoryIcon:"https://img.icons8.com/bubbles/50/000000/cafe.png"}
    ]

    const [activeCategory, setActiveCategory] = useState('best seller');


    return (
        <div className="App">
            <Header/>
            <SearchBar data={menuData}/>

            <div className="container-body">
                <div className="slider">
                    <SliderComponent  sliderArr = {sliderArr} />
                </div>
                <div className="title">
                    <h1 className={"title"}>
                        Catégories
                    </h1>
                </div>
                {/*
                Map et retourne une liste de boutton
                */}
                <div className={"button-category-container "}>
                    {
                        categoryLabelArr.map(
                            (category) => {
                                return (
                                    <a
                                        key={category.categorName}
                                        className={ "button-filter " + (activeCategory === category.categorName ? 'active' : '')}
                                        onClick={(e) => {
                                            setFilterArg(category.categorName)
                                            setActiveCategory(category.categorName);
                                            console.log(e.target.className)
                                        }}>
                                        <span><img src={category.categoryIcon}/></span>{category.categorName} </a>
                                )
                            })}
                </div>
                <div className="container-grid-product">
                    {/*
                    Map et affiche les categories filtrées
                    */}
                    {
                        filterArg == categoryArr[0] &&
                        menuData.map(item => {
                            if (item.IsBestSeller === true) {
                                return (

                                    <div key={item.Id} onClick={()=>{
                                    // showProduct('product',item.Id)
                                    }} >
                                            <Fade left    >
                                    <ProductItem item={item}/>
                                    </Fade>

                                    </div>


                                )
                            }
                        })
                    }
                    {menuData

                        .filter((food) => food.Category.includes(filterArg))
                        .map(item => {
                            return (
                                <div key={item.Name}>


                                <Fade  left >
                                <ProductItem className =" salut"  item={item}/>
                                </Fade>
                                </div>
                                    )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default Home;
