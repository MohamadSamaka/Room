import React from 'react'
import './FullProductDescription.css'
import CloseIcon from '@mui/icons-material/Close';
/*eslint-disable*/

function FullProductDescription(){
    function ShowProductDescription(){
        var DescElem = document.getElementsByClassName('product-full-info')[0];
        var MainWrapper = document.getElementsByClassName('wrapper')[0];
        DescElem.classList.replace('active','disable');
        MainWrapper.classList.replace('inactive', 'active');
    }
    return(
        <div className="product-full-info disable">
            <div className="close-icon" onClick={ShowProductDescription}><CloseIcon></CloseIcon></div>
            <div className="content">
                <div className="main-content">
                    <div className="product-main">
                        <div className="img-thumb">
                            <a href="#"><img src="https://flatsometutorial.com/wp-content/uploads/2020/03/product-20-300x330-1-300x300.jpg"></img></a>
                        </div>
                        <div className="product-info-text">
                            <h1 className="product-title">product-name</h1>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>
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

export default FullProductDescription;