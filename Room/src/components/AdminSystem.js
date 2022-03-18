import React from 'react'
import {useParams} from "react-router-dom";
import "../styles/AdminSystem.css"
import ProductsController from "../sub-pages/AdminSystem/Products.js"
import CategoriesController from "../sub-pages/AdminSystem/Cagegories.js"
import AdminsController from "../sub-pages/AdminSystem/Admins.js"
import PermessionsController from "../sub-pages/AdminSystem/Permessions.js"
import SubCategoriesController from "../sub-pages/AdminSystem/SubCategories.js"

function PageHandler(sqlTargetPage, subtarget){
    switch (sqlTargetPage) {
        case "products":
            return <ProductsController Target={subtarget}/>   
        case "categories":
            return <CategoriesController Target={subtarget}/>;
        case "sub-categories":
            return <SubCategoriesController Target={subtarget}/>;
        case "admins":
            return <AdminsController Target={subtarget}/>;  
        case "permessions":
            return <PermessionsController Target={subtarget}/>;  
        default:
            console.log("error occured navigating to error site");
            return null;
    }
}


export default function DatabaseInserters({target}){
    const {subtarget} = useParams();
    console.log("hello from DataBaseInserter");
    return(
        <form className="" method="POST">
            {PageHandler(target, subtarget, navigator)}
        </form>
    );
}