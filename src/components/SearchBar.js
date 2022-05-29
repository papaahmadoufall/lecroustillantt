import React, {useState} from 'react';
import '../styles/searchBar.scss'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
const SearchBar = (props) => {
    const navigate = useNavigate()
    const ref = useOnclickOutside(() => {
        setActive("disable");
    });

    const {data} = props
    const [inputValue, setInputValue] = useState('');
    const isLast = (index)=> foundData.length == index? true:false
    const [active,setActive]=  useState("desactive")
    // the search result
    const [foundData, setFoundData] = useState(data);

    const filter = (e) => {
        setActive("in-down active")
        const keyword = e.target.value;

        if (keyword !== ''  ) {
            const results = data.filter((dataFound) => {
                return dataFound.Name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundData(results);
        }else {
            setActive("in-down ")
        }
        setInputValue(keyword);
    }
    return (
        <>
            <div  className={"search-input "} >
                <input placeholder={"Recherchez un plat "} value={inputValue} onChange={filter } type="text" />
                <button className="searchBtn">
                    <img src="https://img.icons8.com/ios-glyphs/90/fa314a/search--v1.png"/>                </button>

            </div>

            <div  tabIndex={-1}  ref={ref}
                  // onBlur={()=>setActive("disable")}
                  onFocus={()=>{
                console.log("focus")}
            } className={"search-result "+ active}>
                    {foundData && foundData.length > 0 ? (

                        foundData.map((food,index) => (

                            <div key={food.Id}  onClick={()=>{
                                navigate('/product',{state:food})
                            }}   className={"food"}>
                                <div className="food-name">{food.Name} | {food.Category}</div>
                            </div>

                        ))
                    ) : (
                        <div className="notFound"
                        >
                            <h1>
                                Desolé! Nous n'avons pas trouvé de correspondance
                            </h1>
                            <img
                                src="https://res.cloudinary.com/lecroustillant/image/upload/v1651319977/image-le-croustillant%20/icons8-pleurs_znnf2i.gif" alt=""/>
                        </div>
                    )}

        </div>

        </>
    );
};

export default SearchBar;
