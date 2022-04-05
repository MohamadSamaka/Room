import {React, useContext} from 'react'
import '../styles/FullProductDescription.css'
import CloseIcon from '@mui/icons-material/Close';
import {ApplicationPublicContext} from '../App.js'

/*eslint-disable*/


function CloseProductDescription(){
    var DescElem = document.getElementsByClassName('product-full-info')[0];
    var MainWrapper = document.getElementsByClassName('wrapper')[0];
    document.body.style.overflow = "visible";
    DescElem.classList.replace('active','disable');
    MainWrapper.classList.replace('inactive', 'active');
}

export function ShowProductFullInfoContainer() {
    var DescElem = document.getElementsByClassName('product-full-info')[0];
    var MainWrapper = document.getElementsByClassName('wrapper')[0];
    document.body.style.overflow = "hidden";
    DescElem.classList.replace('disable','active');
    MainWrapper.classList.replace('active', 'inactive');
}
export function FullProductDescription(){
    const clickedProduct = useContext(ApplicationPublicContext).clickedProduct[0];
    return(
        <div className="product-full-info disable">
            <div className="close-icon"><CloseIcon onClick={CloseProductDescription}></CloseIcon></div>
            <div className="content">
                <div className="main-content">
                    <div className="product-main">
                        <div className="img-thumb">
                            <img src={`http://localhost:3001/images/products/${clickedProduct && clickedProduct.Images[0]}`} alt=""></img>
                        </div>
                        <div className="product-info-text">
                            <h1 className="product-title">{clickedProduct && clickedProduct.Title}</h1>
                            <p>{clickedProduct && clickedProduct.Description}</p>
                        </div>
                    </div>
                    <div className="product-footer">
                        this is the footer
                    </div>
                </div>
                <div className="buying-section">
                    <p>buying-section</p>
                </div>  
            </div>
        </div>
    );
}
