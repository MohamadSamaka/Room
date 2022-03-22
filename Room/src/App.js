import {React, createContext, useState} from 'react'
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles/App.css'
import {FullProductDescription} from './components/FullProductDescription.js'
import Login from "./pages/Login.js";
import PrivateRoutes from './routes/PrivateRoutes.js';
import AdminSystem from './components/AdminSystem.js';
import Admin from "./pages/Admin.js"
import Home from "./pages/Home.js";
import Error from "./pages/Error.js"
import {GetAllProducts} from "./API/Get.js"

// export const UserName = React.createContext('Mohamad');
export const ApplicationContext = createContext();


export default function App(){
  const location = useLocation();
  const [currentProductsRawData, setCurrentProductsRawData] = GetAllProducts([]);
  const [clickedProduct, setClickedProduct] = useState(null);
  const show = location.pathname === '/';
    return (
      <ApplicationContext.Provider value= {[[currentProductsRawData, setCurrentProductsRawData],[clickedProduct, setClickedProduct]]}>
        {show && <FullProductDescription></FullProductDescription>}
        <TransitionGroup element={null}>
          <CSSTransition key={location.key} exit={false} classNames="fade" timeout={300}>
            <>
              <Routes location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<PrivateRoutes isLogged={true}/>}>
                  <Route path="/admin" element={<Admin/>}>
                    <Route path="products/:subtarget" element={<AdminSystem target={"products"}/>}/>
                    <Route path="categories/:subtarget" element={<AdminSystem target={"categories"}/>}/>
                    <Route path="sub-categories/:subtarget" element={<AdminSystem target={"sub-categories"}/>}/>
                    <Route path="admins/:subtarget" element={<AdminSystem target={"admins"}/>}/>
                    <Route path="permessions/:subtarget" element={<AdminSystem target={"permessions"}/>}/>
                    <Route path="*" element={<Navigate to="/admin"/>}/>
                  </Route>
                </Route>
                <Route path="*" element={<Error/>}/>
              </Routes>
            </>
          </CSSTransition>
      </TransitionGroup>
      </ApplicationContext.Provider>
    );
}