import Axios from 'axios'

const apiPath = process.env.REACT_APP_BASE_URL;

export function RemoveProduct(id){
    Axios.delete(`${apiPath}/api/products`, {
        data:{Id:id}
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function RemoveCategory(id){
    Axios.delete(`${apiPath}/api/categories`, {
        data:{categoryId:id}
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function RemoveSubCategory(id){
    Axios.delete(`${apiPath}/api/subcategories`, {
        data:{subCategoryId:id}
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function RemoveAdmin(id){
    Axios.delete(`${apiPath}/api/admins`, {
        data:{adminId:id}
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

export function RemovePermission(id){
    Axios.delete(`${apiPath}/api/permissions`, {
        data:{PermissionId:id}
    })
    .then(response => {
        alert(response.data);
    })
    .catch(error => {
        alert("error: ", error.response.data.message)
    });
}

