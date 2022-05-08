import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Child from "./Child";
const Cart = () => {
    const [childData, setChildData] = useState("")
    const dataToShare =( dataToParent)=>{
        setChildData(dataToParent)
    }
    return (
        <div>
          {/*  <Header/>*/}
          {/*  <SearchBar/>*/}
          {/*<div className={"cart"}>*/}
            <Child
                dataToShare={dataToShare}
                data={"this data is from parent component"}/>
            {childData}
          {/*</div>*/}


        </div>
    );
};

export default Cart;
