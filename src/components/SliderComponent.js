import React, {Fragment} from 'react';

import "../styles/Slider.scss"
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {Link, useNavigate} from "react-router-dom";
const SliderComponent = ({sliderArr}) => {
    const properties = {
        duration: 5000,
        transitionDuration: 200,
        infinite: true,
        indicators:true,
        pauseOnHover:true

    };const propertiesSlide = {
        duration: 5000,
        transitionDuration: 200,
        infinite: true,
        indicators:false,
        arrows:false

    };
     return (

        <div className="container-slider">

                    <Fade {...properties} className={"slide"}>
                    {
                        sliderArr.map((current , index)=>{
                                 return(
                                    <Fragment key = {index}>

                                        <center>
                                            <div className="sliderTitle">
                                                <h1 className="tilteSlider">
                                                    {current.Name}
                                                </h1>
                                                <p>
                                                    <span>{current.Price}  fcfa rek</span>
                                                </p>
                                            </div>
                                        </center>

                                            <div className="imgSlide">
                                                <Link to={"/product"} state={current}>

                                                    <img  key={current.Id} className={"slideImg"} src={current.ImgUrl}  alt=""/>
                                                </Link>
                                            </div>

                                    </Fragment>
                                )

                            })
                    }
                        </Fade>

                <div className="tray">
                </div>
                {/*<div className="arrow arrow-right">*/}
                {/*    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-right-arrows-dreamstale-lineal-dreamstale-3.png"/>*/}
                {/*</div>*/}


            <div className="dot-indicator">

            </div>

        </div>
    );
};

export default SliderComponent;
