import {GetAllProducts, GetAllCategories, GetAllSubCategories} from "../API/Get.js"
import { useState } from "react";


export function ContextsValues(){
    const [currentProductsRawData, setCurrentProductsRawData] = GetAllProducts([]);
    const [clickedProduct, setClickedProduct] = useState(null);
    const [currentCategories, setCurrentCategories] = GetAllCategories([]);
    const [currentSubCategories, setCurrentSubCategories] = GetAllSubCategories([]);
    // const [currentAdmins, setCurrentAdmins] = useState([]);
    // const [currentPermissions, setCurrentPermissions] = useState([]);


    const Hooks = {
        "currentProductsRawData": [currentProductsRawData, setCurrentProductsRawData],
        "clickedProduct": [clickedProduct, setClickedProduct],
        "currentCategoriesList": [currentCategories, setCurrentCategories],
        "currentSubCategoriesList": [currentSubCategories, setCurrentSubCategories],
        // "currentAdmins": [currentAdmins, setCurrentAdmins],
        // "currentPermissions": [currentPermissions, setCurrentPermissions]
    }
    return Hooks;  
}

// export default ContextsValues = Contexts();
