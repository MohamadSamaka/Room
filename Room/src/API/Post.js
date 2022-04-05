import Axios from 'axios'

const apiPath = process.env.REACT_APP_BASE_URL;

export function AddProduct(pcImages){
    Axios.post(`${apiPath}/api/products`, pcImages)
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function AddCategory(name){
    Axios.post(`${apiPath}/api/categories`, {
        newCategoryName: name,
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function AddSubCategory(name, parentCategoryId){
    Axios.post(`${apiPath}/api/subcategories`, {
        "newSubCategoryName": name,
        "parentCategoryId": parentCategoryId
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}


export function AddAdmin(userName, password, email, permission){
    Axios.post(`${apiPath}/api/admins`, {
        "userName": userName,
        "password": password,
        "email": email,
        "permission": permission,
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function AddPermission(name){
    Axios.post(`${apiPath}/api/permissions`, {
        permissionName: name,
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}


