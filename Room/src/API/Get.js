import Axios from 'axios'
import {useEffect, useState} from 'react'

async function fetchAll(TableName, setHook) {
    const response = await Axios(`${process.env.REACT_APP_BASE_URL}/api/${TableName}`)
    .then((res) => {
        return res.data
    })
    .catch(console.error);
    setHook(response);
}

export function GetAllProducts(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        fetchAll("products", setItem);
      }, []);
    return [item, setItem];
}

export function GetAllCategories(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        fetchAll("categories", setItem);
      }, []);
    return [item, setItem];
}

export function GetAllSubCategories(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        fetchAll("subcategories", setItem);
      }, []);
    return [item, setItem];
}

export function GetAllAdmins(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        fetchAll("admins", setItem);
      }, []);
    return [item, setItem];
}

export function GetAllPermissions(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        fetchAll("Permissions", setItem);
      }, []);
    return [item, setItem];
}


