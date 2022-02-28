import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useTranslation } from "react-i18next";
import '../Translation'

function Footer(){
    const {t} = useTranslation();
    return(
        <footer id="footer">
            <div className="content">
                <div className="logo">Logo</div>
                <div className="nav">
                    <span>{t('Footer.home')}</span>
                    <span>{t('Footer.about')}</span>
                    <span>{t('Footer.faq')}</span>
                </div>
                <div className="social-media-wrapper">
                    <span><FacebookIcon></FacebookIcon></span>
                    <span><InstagramIcon></InstagramIcon></span>
                    <span><TwitterIcon></TwitterIcon></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer
