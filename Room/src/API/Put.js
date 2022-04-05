import Axios from 'axios'

const apiPath = process.env.REACT_APP_BASE_URL;

export function UpdateCategory(categoryId, newName){
    Axios.put(`${apiPath}/api/categories`, {
        "categoryId": categoryId,
        "newName": newName
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function UpdateSubCategory(subCategoryId, newSubCategoryName, newParentCategoryId){
    Axios.put(`${apiPath}/api/subcategories`, {
        "subCategoryId": subCategoryId,
        "newSubCategoryName": newSubCategoryName,
        "newParentCategoryId": newParentCategoryId
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}


export function UpdatePermission(permissionId, newPermissionName){
    Axios.put(`${apiPath}/api/permissions`, {
        "permissionId": permissionId,
        "newPermissionName": newPermissionName
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}


export function UpdateAdmin(adminId, userName, password, email, permissionId){
    Axios.put(`${apiPath}/api/admins`, {
        "adminId": adminId,
        "userName": userName,
        "password": password,
        "email": email,
        "permissionId": permissionId
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}



// export function UpdateCategory(id, name){
//     Axios.put(`${apiPath}/api/categories`, new URLSearchParams({
//         categoryId: id,
//         newName: name
//       }),{
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//       .then(response => {
//         alert(response);
//       })
//       .catch(error => {
//         alert("error: ", error.response.data.message)
//       });
// }