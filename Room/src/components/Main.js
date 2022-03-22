import {React, useEffect, useState, useContext } from 'react'
import '../styles/Main.css'
import StarIcon from '@mui/icons-material/Star';
import {useTranslation } from "react-i18next";
import '../Translation.js'
import ProductBasicInfoContainer from '../bluePrints/ProductBasicInfoContainer';
import {ApplicationContext} from '../App.js'


/*eslint-disable*/
function Main() {
    const {t} = useTranslation();
    const currentProductsRawData = useContext(ApplicationContext)[0][0];
    const setClickedProduct = useContext(ApplicationContext)[1][1];
    const [productsElemenetContainer, setproductsElemenetContainer] = useState([]);

    useEffect(()=>{
        setproductsElemenetContainer(currentProductsRawData.map(data =>{
            try{
                data["Images"] = JSON.parse(data["Images"])
            }
            catch{
                console.log("is either already been converted to json, or the can't be canverted in the first place")
            }
            return ProductBasicInfoContainer(data, setClickedProduct)
        }))
        console.log("hello this is from the Main!");
    },[currentProductsRawData])

    return(
        <main id="main">
            <section id="contant">
                <div id="main-face">
                    <div className="bg-mainface">
                        <div className="bg-mainface-overlay"></div>
                    </div>
                    <div className="main-face-contant">
                        <div className="intro-content">
                            <h6>{t('Main.big-title')}</h6>
                            <h1>{t('Main.big-title')}</h1>
                            <p>{t('Main.small-description')}</p>
                        </div>
                    </div>
                </div>
                <div className="shop">
                    <div id="shop-decoration"><b></b><span><StarIcon id ="star-icon"></StarIcon></span><b></b></div>
                    <h1 id="shop-title">{t('Main.featured-products')}</h1>
                    <div className="products-section">
                        {productsElemenetContainer}
                    </div>
                </div>
            </section>
        </main>
    );
} 

export default Main