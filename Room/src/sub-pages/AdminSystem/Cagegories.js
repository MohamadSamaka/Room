function AddCategory(){
    return(
        <>
            {/* <div><span>Id: </span><input type="number" min="1"></input></div> */}
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function UpdateCategory(){
    return(
        <>
            <div><span>Id: </span><input type="number" min="1"></input></div>
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function RemoveCategory(){
    return(
        <>
            <div><span>Id: </span><input type="text"></input></div>
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
    switch (Target) {
        case "AddCategory":
            return AddCategory();
        case "RemoveCategory":
            return RemoveCategory();
        case "UpdateCategory":
            return UpdateCategory();
        case "ShowAllCategories":
            return ShowAllCategories();
        default:
            console.log("no sub-path matched")
            return null;
    }
}