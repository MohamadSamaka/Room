import React from 'react'
import '../styles/Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import 'flag-icon-css/css/flag-icons.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useTranslation } from "react-i18next";
import '../Translation'
import i18next from 'i18next';
import {useNavigate} from 'react-router-dom';


const languages = [
    {
        id : 1,
        code: 'ar',
        name: 'العربية',
        country_code:'ps'
    },
    {
        id: 2,
        code: 'en',
        name: 'English',
        country_code:'us'
    },
    {
        id: 3,
        code: 'hr',
        name: 'עברית',
        country_code:'il'
    }

]

function Header() {
    const {t} = useTranslation();
    let navigate = useNavigate();
    function ChangeLanguage(code){
        i18next.changeLanguage(code);
    }

    return (
        <header id="header">
            <section className="Header">
                <div className="left-side-header">
                    <div className="logo" onClick={()=>{navigate("/")}}>Logo</div>
                    <form className="search-feild">
                        <select name="categories-menu" id="categories-menu">
                            {Array.from(i18next.t('Header.categories', {returnObjects:true})).map((e, index) => {
                                if(e === 'All')
                                    return <option key={index} value={index} hidden>{e}</option>
                                else
                                    return <option key={index} value={index}>{e}</option>
                            })}
                        </select>
                        <input type="text" className="header-input"></input>
                    </form>
                    <button id="search-icon"><SearchIcon></SearchIcon></button>
                </div>
                <div className="right-side-header">
                    <div className="langauge">
                        <span className="flag-icon flag-icon-us"></span>
                        <ul className="lang-dropdown">
                                {languages.map(({id, code, name, country_code}) => (
                                    <li onClick={() => ChangeLanguage(code)} key={id} className={country_code}><span className={`flag-icon flag-icon-${country_code}`}></span><span>{name}</span></li>
                                ))}
                        </ul>
                    </div>
                    <div className="login" onClick={()=>{navigate("/login")}}>
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
