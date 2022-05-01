import React from 'react';
import './App.scss';
 import Intro from '../pages/Intro';
import Cart from '../pages/Cart';
import AboutUS from'../pages/AboutUS';
import ProductShowItem from '../pages/ProductShowItem';
import PageNotFound from "./PageNotFound";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Menu from "./Menu";
const pathRootUrl = [{label:"Acceuil",pathUrl:"/",component:<Home />},{label:"",pathUrl:"/product",component:< ProductShowItem/>},{label:"Panier",pathUrl:"/panier",component:<Cart />},{label:"A propos",pathUrl:"/about",component:<AboutUS />},]
function App() {
    return(
        <React.StrictMode>
            <Router>

                <Routes>
                    {
                        pathRootUrl.map((path)=>{
                            return <Route key={ path.pathUrl} exact path= {path.pathUrl}  element={path.component} />
                        })
                    }
                        <Route path={"*"} element = {<Home />}></Route>
                </Routes>

            </Router>
        </React.StrictMode>
    )
}



export default App;
