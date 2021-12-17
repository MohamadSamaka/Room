import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import 'flag-icon-css/css/flag-icons.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useTranslation } from "react-i18next";
import './Translation'
import i18next from 'i18next';


const languages = [
    {
        code: 'ar',
        name: 'العربية',
        country_code:'ps'
    },
    {
        code: 'en',
        name: 'English',
        country_code:'us'
    },
    {
        code: 'hr',
        name: 'עברית',
        country_code:'il'
    }

]

function Header() {
    const {t} = useTranslation();
    function ChangeLanguage(code){
        i18next.changeLanguage(code);
        // console.log(document.getElementsByClassName('lang-dropdown')[0].style);
        // document.getElementsByClassName('lang-dropdown')[0].style.display = 'none';
        // document.getElementsByClassName('lang-dropdown')[0].style.removeProperty('display');

    }

    return (
        <header id="header">
            <section className="Header">
                <div className="left-side-header">
                    <div className="logo">Logo</div>
                    <form className="search-feild">
                        <select name="categories-menu" id="categories-menu">
                            {Array.from(i18next.t('Header.categories', {returnObjects:true})).map(e => {
                                if(e === 'All')
                                    return <option hidden>{e}</option>
                                else
                                    return <option>{e}</option>
                            })}
                            {/* <option value="All" hidden>All</option>
                            <option value="All categories">All categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Toys">Toys</option>
                            <option value="Cars">Cars</option> */}
                        </select>
                        <input type="text" className="header-input"></input>
                    </form>
                    <button id="search-icon"><SearchIcon></SearchIcon></button>
                </div>
                <div className="right-side-header">
                    <div className="langauge">
                        <span className="flag-icon flag-icon-us"></span>
                        <ul className="lang-dropdown">
                                {languages.map(({code, name, country_code}) => (
                                    <li onClick={() => ChangeLanguage(code)} className={country_code}><span className={`flag-icon flag-icon-${country_code}`}></span><span>{name}</span></li>
                                ))}
                        </ul>
                    </div>
                    <div className="login">
                        <span id="login-icon"><PersonOutlineIcon></PersonOutlineIcon></span>
                        <p>{t('Header.login')}</p>    
                    </div>
                    <div className="cart">
                        <span id="cart-icon"><ShoppingCartIcon></ShoppingCartIcon></span>
                        <span id="num-items-incart">0</span>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
