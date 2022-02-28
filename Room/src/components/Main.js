import React from 'react'
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
    React.useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((res) => {
        let Products = res.data.map(data => {
            return <div className="product" key={data.Id}>
                        <div className="thumb">
                            {/* <a href="#"> */}
                                <img className="product-image"src={data["ImageLink"]}></img>
                            {/* </a>  */}
                        </div>
                        <div className="product-basic-info">
                            <h4 className="product-title">{data["Title"]}</h4>
                            <span className="product-price">{data["Price"]}$</span>
                        </div>
                    </div>
        })
        reactDom.render(Products, document.getElementsByClassName('products-section')[0]);
    });
    }, []);
    function ShowProductDescription(e) {
        var DescElem = document.getElementsByClassName('product-full-info')[0];
        var MainWrapper = document.getElementsByClassName('wrapper')[0];
        DescElem.classList.replace('disable','active');
        MainWrapper.classList.replace('active', 'inactive');
        // console.log(document.getElementsByClassName('product')[0].getAttribute('key'));
    }

    React.useEffect(() => {
        Array.from(document.getElementsByClassName('product')).forEach(product => {
            product.addEventListener('click',ShowProductDescription);
            // product.getElementsByTagName('img')[0].addEventListener('click',ShowProductDescription)
        });

        Array.from(document.getElementsByClassName('thumb')).forEach(thumb =>{
            let data = [<AddShoppingCartIcon className="add-to-cart"></AddShoppingCartIcon>,
                        <FavoriteIcon className="add-to-wishlist"></FavoriteIcon>];
            let elem = document.createElement('ul');
            elem.classList.add('product-slider-op');
            data.forEach(d =>{
                let child = document.createElement('li');
                reactDom.render(d, child);
                elem.appendChild(child);
            });
            thumb.appendChild(elem);
        })
        console.log("hello from this thing?");
    ;})

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
