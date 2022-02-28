import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProductFullInfo from './components/FullProductDescription'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error"

export default function App(){
  const location = useLocation();
  const show = location.pathname === '/';
    return (
      <>
      {show && <ProductFullInfo></ProductFullInfo>}
            {/* <div className='wrapper active'>
        <Wrapper/>
        </div> */}
        {/* <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
          {/* <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </>
    );
}