import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
const hello="this is a global shit";
export default function Wrapper(){
    return(
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    );
}