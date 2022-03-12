import {useNavigate} from "react-router-dom";



function AddProduct(){
    return(
        <>
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category Id: </span><input type="number" min="0"></input></div>
            <div><span>SubCategory Id: </span><input type="number" min="0"></input></div>
            <div><span>Images Link: </span><input type="text"></input></div>
            <div><span>Price: </span><input type="number" min="0"></input></div>
            <div><span>Description: </span><br></br><textarea maxLength="500"></textarea></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function UpdateProduct(){
    return(
        <>
            <div><span>Product Id</span><input type="text"></input></div>
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category Id: </span><input type="number" min="0"></input></div>
            <div><span>SubCategory Id: </span><input type="number" min="0"></input></div>
            <div><span>Images Link: </span><input type="text"></input></div>
            <div><span>Price: </span><input type="number" min="0"></input></div>
            <div><span>Description: </span><br></br><textarea maxLength="500"></textarea></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function RemoveProduct(){
    return(
        <>
            <div><span>Item Id: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function ShowAllProducts(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

export default function ProductsController({Target}){
    const navigateTo = useNavigate(); 
    switch (Target) {
        case "AddProduct":
            return AddProduct();
        case "RemoveProduct":
            return RemoveProduct();
        case "UpdateProduct":
            return UpdateProduct();
        case "ShowAllProducts":
            return ShowAllProducts();
        // default:
        //     return undefined;
    }
}