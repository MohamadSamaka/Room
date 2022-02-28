import React from 'react'
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
export default function Wrapper(){
    return(
        <div className='wrapper active'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}