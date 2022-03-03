import React from 'react'
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import { useEffect } from 'react';
export default function Home(){
    useEffect(()=>{
        document.body.classList=[];
        document.body.classList.add("home-page");
    }, [])
    return(
        <div className='wrapper active'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}