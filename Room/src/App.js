import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles/App.css'
import ProductFullInfo from './components/FullProductDescription'
import Login from "./pages/Login";
import AdminSystem from './components/AdminSystem';
import Admin from "./pages/Admin"
import Home from "./pages/Home";
import Error from "./pages/Error"

export default function App(){
  const location = useLocation();
  const show = location.pathname === '/';
    return (
      <>
        {show && <ProductFullInfo></ProductFullInfo>}
        <TransitionGroup element={null}>
          <CSSTransition key={location.key} exit={false} classNames="fade" timeout={300}>
            <>
              <Routes location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin/:username" element={<Admin/>}>
                  <Route exact path=":target/:subtarget" element={<AdminSystem/>}/>
                    {/* <Route path=":target" element={<DatabaseInserters/>}/> */}
                </Route>
                {/* <Route path="/test/:target" element={<Admin/>}/> */}
                <Route path="/404" element={<Error/>}/>
                <Route path="*" element={<Error/>}/>
                {/* <Route path="/profile/:username" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} /> */}
              </Routes>
            </>
          </CSSTransition>
      </TransitionGroup>
      </>
    );
}