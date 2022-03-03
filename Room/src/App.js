import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles/App.css'
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
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Error/>}/>
              {/* <Route path="/profile/:username" element={<Profile />} />
              <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </CSSTransition>
      </TransitionGroup>
      </>
    );
}