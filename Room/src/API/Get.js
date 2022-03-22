import Axios from 'axios'
import {useEffect, useState} from 'react'
// export async function GetAllProducts(){    
//     return await Axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
//     .then((res) => {
//         return res.data
//     })
// }

export function GetAllProducts(initialValue){ 
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        async function fetchAllProducts() {
            const response = await Axios(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then((res) => {
                return res.data
            })
            .catch(console.error);
            setItem(response);
        }
        fetchAllProducts();
      }, []);
    return [item, setItem];
}