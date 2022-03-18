import React, {useEffect} from 'react'
import '../styles/Main.css'
// import '../styles/FullProductDescription.css'
// import background from './images/background.jpg'
// import shipping from './images/shipping.png'
// import return_ from './images/return.png'
// import low_price from './images/low-price.png'
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useTranslation } from "react-i18next";
import '../Translation'
import reactDom from 'react-dom';
import Axios from 'axios';

/*eslint-disable*/
function Main() {
    const {t} = useTranslation();
    let Products;
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/products')
        .then((res) => {
        Products = res.data.map(data => {
            let images = JSON.parse(data["Images"]);
            return <div className="product" key={data.Id} onClick={ShowProductDescription}>
                        <div className="thumb">
                                <img className="product-image"src={`http://localhost:3001/images/products/${images[0]}`}></img>
                                <ul className='product-slider-op'>
                                    <li>
                                        <AddShoppingCartIcon className="add-to-cart"></AddShoppingCartIcon>
                                    </li>
                                    <li>
                                        <FavoriteIcon className="add-to-wishlist"></FavoriteIcon>
                                    </li>
                                </ul>
                        </div>
                        <div className="product-basic-info">
                            <h4 className="product-title">{data["Title"]}</h4>
                            <span className="product-price">{data["Price"]}$</span>
                        </div>
                    </div>
        })
        reactDom.render(Products, document.getElementsByClassName('products-section')[0]);
    });
        console.log("hello this is from the Main!");
    },[])

    function ShowProductDescription() {
        var DescElem = document.getElementsByClassName('product-full-info')[0];
        var MainWrapper = document.getElementsByClassName('wrapper')[0];
        DescElem.classList.replace('disable','active');
        MainWrapper.classList.replace('active', 'inactive');
    }

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
                {/* <div className="features">
                    <div id="shipping">
                        <img src={shipping} alt="shipping icon"></img>
                        <h3>Priority Shipping</h3>
                        <p>We do our best to deliever your</p>
                    </div>
                    <div id="return">
                        <img src={return_} alt="shipping icon"></img>
                        <h3>Fuss Free Returns</h3>
                        <p>best return policies.</p>
                    </div>
                    <div id="discount">
                        <img src={low_price} alt="shipping icon"></img>
                        <h3>Cheapest in country</h3>
                        <p>We find the best prices for our customers.</p>
                    </div>
                </div> */}
                <div className="shop">
                    <div id="shop-decoration"><b></b><span><StarIcon id ="star-icon"></StarIcon></span><b></b></div>
                    <h1 id="shop-title">{t('Main.featured-products')}</h1>
                    <div className="products-section">
                    </div>
                </div>
            </section>
        </main>
    );
} 

export default Main
