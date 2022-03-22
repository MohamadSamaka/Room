function AddSubCategory(){
    return(
        <>
            {/* <div><span>Id: </span><input type="number" min="1"></input></div> */}
            <div><span>Parent Category: </span>
                <select id="slct" required="required">
                    <option value="" disabled="disabled" defaultValue="selected">Select option</option>
                    <option value="#">One</option>
                    <option value="#">Two</option>
                    <option value="#">Three</option>
                    <option value="#">Four</option>
                    <option value="#">Five</option>
                    <option value="#">Six</option>
                    <option value="#">Seven</option>
                </select>
            </div>
            <div><span>SubCategory Name: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function UpdateSubCategory(){
    return(
        <>
            <div><span>Id: </span><input type="number" min="1"></input></div>
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function RemoveSubCategory(){
    return(
        <>
            <div><span>Id: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function ShowAllSubCategories(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

export default function SubCategoriesController({Target}){
    switch (Target) {
        case "AddSubCategory":
            return AddSubCategory();
        case "RemoveSubCategory":
            return RemoveSubCategory();
        case "UpdateSubCategory":
            return UpdateSubCategory();
        case "ShowAllSubCategories":
            return ShowAllSubCategories();
        default:
            console.log("no sub-path matched")
            return null;
    }
}