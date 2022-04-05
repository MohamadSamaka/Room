import React from 'react'
import {useParams, Navigate} from "react-router-dom";
import "../styles/AdminSystem.css"
import ProductsController from "../sub-pages/AdminSystem/Products.js"
import CategoriesController from "../sub-pages/AdminSystem/Categories.js"
import AdminsController from "../sub-pages/AdminSystem/Admins.js"
import PermessionsController from "../sub-pages/AdminSystem/Permissions.js"
import SubCategoriesController from "../sub-pages/AdminSystem/SubCategories.js"

function SubPageHandler(sqlTargetPage, subtarget){
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
            return <Navigate to="/admin"/>
    }
}


export default function SubAdminSystems({target}){
    const {subtarget} = useParams();
    console.log("hello from DataBaseInserter");
    return(
        <form className="" method="POST">
            {SubPageHandler(target, subtarget, navigator)}
        </form>
    );
}