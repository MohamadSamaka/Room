import React from 'react'
import {useParams, useNavigate} from "react-router-dom";
import "../styles/AdminSystem.css"
import ProductsController from "../sub-pages/AdminSystem/Products.js"
import CategoriesController from "../sub-pages/AdminSystem/Cagegories.js"
// const MAP = {
//     "prodct-inster": ["Title", "Description", "CategoryId", "SubCategoryId", "ImageLink", "AdditionalImageLink", "MoblieLink", "Availability", "Price", "SalePrice"]
// }

// function ProductInserter(subtarget){
//     switch (subtarget) {
//         case "AddProduct":
//             return <AddProduct Target={subtarget}/>
//         default:
//             break;
//     }
// }


function PageHandler(sqlTargetPage, subtarget, navigateTo){
    switch (sqlTargetPage) {
        case "products":
            return <ProductsController Target={subtarget}/>   
        case "categories":
            return <CategoriesController Target={subtarget}/>;  
        default:
            navigateTo("/404")
    }
    console.log("error occured navigating to error site");
    // navigateTo("/404");
}


export default function DatabaseInserters(){
    // const {pathname} = useLocation();
    const navigator = useNavigate();
    const {target, subtarget} = useParams();
    console.log("hello from DataBaseInserter");
    return(
        <form className="" method="POST">
            {PageHandler(target, subtarget, navigator)}
        </form>
    );
}