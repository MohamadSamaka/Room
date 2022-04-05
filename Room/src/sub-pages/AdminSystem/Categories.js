import {ContextsValues} from "../../helpers/ContextsValues.js"
import {AddCategory} from "../../API/Post.js"
import {RemoveCategory} from "../../API/Delete.js"
import {UpdateCategory} from "../../API/Put.js"



export function PrepareCategoresListElement(T){
    return T.map(({Id, Name})=>
    <option key={Id} value={Id}>{Name}</option>
    )
}

function onClickAdd(e){
    e.preventDefault();
    AddCategory(document.querySelector("input").value)
    document.querySelector("form").reset();
}

function AddCategoryContainer(){
    return(
        <>
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit" value="Add Category" onClick={(e)=> {onClickAdd(e)}}></input></div>
        </>
    );
}

function onClickDelete(e){
    e.preventDefault(); 
    const categoryId = document.querySelector("select").value;
    if(!categoryId)
        alert("Make sure of your inputs")
    else
        RemoveCategory(categoryId);
    document.querySelector("form").reset();
}

function RemoveCategoryContainer(categories){
    return(
        <>
            <div><span>Categories: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a category</option>
                    {categories}
                </select>
            </div>
            <div><input type="submit" value="Remove Category" onClick={(e)=> onClickDelete(e)}></input></div>
        </>
    );
}

function onClickUpdate(e){
    e.preventDefault(); 
    const categoryId = document.querySelector("select").value;
    const newName = document.querySelector("input").value;
    if(!newName || !categoryId)
        alert("Make sure of your inputs")
    else
        UpdateCategory(categoryId, newName);
    document.querySelector("form").reset();
}

function UpdateCategoryContainer(categories){
    return(
        <>
            <div><span>Update: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled" >Select a category</option>
                    {categories}
                </select>
            </div>
            <div><span>To: </span><input type="text"></input></div>
            <div><input type="submit" value="Update Category" onClick={(e)=> onClickUpdate(e)}></input></div>
        </>
    );
}

function ShowAllCategoriesContainer(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

function TargetCaller(Target, elems){
    switch (Target) {
        case "AddCategory":
            return AddCategoryContainer();
        case "RemoveCategory":
            return RemoveCategoryContainer(elems);
        case "UpdateCategory":
            return UpdateCategoryContainer(elems);
        case "ShowAllCategories":
            return ShowAllCategoriesContainer();
        default:
            console.log("no sub-path matched")
            return null;
    }
}

export default function CategoriesController({Target}){
    const currentCategories = ContextsValues().currentCategoriesList[0];
    return(
        <>
            {TargetCaller(Target, PrepareCategoresListElement(currentCategories))}
        </>
    );
}