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

// export const UserName = React.createContext('Mohamad');


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
                <Route path="/admin" element={<Admin/>}>
                  <Route path="products/:subtarget" element={<AdminSystem target={"products"}/>}/>
                  <Route path="categories/:subtarget" element={<AdminSystem target={"categories"}/>}/>
                  <Route path="sub-categories/:subtarget" element={<AdminSystem target={"sub-categories"}/>}/>
                  <Route path="admins/:subtarget" element={<AdminSystem target={"admins"}/>}/>
                  <Route path="permessions/:subtarget" element={<AdminSystem target={"permessions"}/>}/>
                </Route>
                <Route path="/404" element={<Error/>}/>
                <Route path="*" element={<Error/>}/>
              </Routes>
            </>
          </CSSTransition>
      </TransitionGroup>
      </>
    );
}