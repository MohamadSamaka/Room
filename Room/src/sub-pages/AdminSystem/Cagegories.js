import {useNavigate} from "react-router-dom";



function AddCategory(){
    return(
        <>
            <div><span>Category Id: </span><input type="number" min="1"></input></div>
            <div><span>Category Name: </span><input type="text"></input></div>
        </>
    );
}

function UpdateCategory(){
    return(
        <>
            <div><span>Category Id: </span><input type="number" min="1"></input></div>
            <div><span>Category Name: </span><input type="text"></input></div>
        </>
    );
}

function RemoveCategory(){
    return(
        <>
            <div><span>Category Id: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function ShowAllCategories(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

export default function CategoriesController({Target}){
    const navigateTo = useNavigate(); 
    switch (Target) {
        case "AddCategory":
            return AddCategory();
        case "RemoveCategory":
            return RemoveCategory();
        case "UpdateCategory":
            return UpdateCategory();
        case "ShowAllCategories":
            return ShowAllCategories();
        // default:
        //     return undefined;
    }
}