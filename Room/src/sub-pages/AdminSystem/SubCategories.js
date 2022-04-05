import {ContextsValues} from "../../helpers/ContextsValues.js"
import {PrepareCategoresListElement} from "./Categories.js"
import {AddSubCategory} from "../../API/Post.js"
import {RemoveSubCategory} from "../../API/Delete.js"
import {UpdateSubCategory} from "../../API/Put.js"

export function PrepareSubCategoresListElement(T){
    return T.map(({Id, Name})=>
    <option key={Id} value={Id}>{Name}</option>
    )
}


function onClickAdd(e){
    e.preventDefault(e);
    const subCategoryName = document.querySelector("input").value;
    const parentCategoryId = document.querySelector("select").value;
    AddSubCategory(subCategoryName, parentCategoryId)
}


function AddSubCategoryContainer(CurrentParentCategories){
    return(
        <>
            <div><span>SubCategory Name: </span><input type="text"></input></div>
            <div><span>Parent Category: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select option</option>
                    {CurrentParentCategories}
                </select>
            </div>
            <div><input type="submit" value="Add sub category" onClick={(e) => onClickAdd(e)}></input></div>
        </>
    );
}


function onClickUpdate(e){
    e.preventDefault();
    const selects = document.querySelectorAll("select");
    const subCategoryId = selects[0].value;
    const newSubCategoryName = document.querySelector("input").value;
    const newParentCategoryId = selects[1].value;
    UpdateSubCategory(subCategoryId, newSubCategoryName, newParentCategoryId)
}


function UpdateSubCategoryContainer(CurrentSubCategories, CurrentParentCategories){
    return(
        <>
            <div><span>Change SubCategory: </span>
            <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a subcateory</option>
                    {CurrentSubCategories}
                </select>
            </div>
            <div><span>To: </span><input type="text"></input></div>
            <div><span>Change Parent Category: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a new parent category</option>
                    {CurrentParentCategories}
                </select>
            </div>
            <div><input type="submit" value="Update sub category" onClick={(e) => onClickUpdate(e)}></input></div>
        </>
    );
}


function onClickRemove(e){
    e.preventDefault();
    const parentCategoryId = document.querySelector("select").value;
    RemoveSubCategory(parentCategoryId);
}

function RemoveSubCategoryContainer(CurrentParentCategories){
    return(
        <>
            <div><span>SubCategory: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a subcategory to remove</option>
                    {CurrentParentCategories}
                </select>
            </div>
            <div><input type="submit" value="Remove sub category" onClick={(e) => onClickRemove(e)}></input></div>
        </>
    );
}

function ShowAllSubCategoriesContainer(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

function TargetCaller(Target, CurrentSubCategories, CurentParentCategories){
    switch (Target) {
        case "AddSubCategory":
            return AddSubCategoryContainer(CurentParentCategories);
        case "RemoveSubCategory":
            return RemoveSubCategoryContainer(CurrentSubCategories);
        case "UpdateSubCategory":
            return UpdateSubCategoryContainer(CurrentSubCategories, CurentParentCategories);
        case "ShowAllSubCategories":
            return ShowAllSubCategoriesContainer();
        default:
            console.log("no sub-path matched")
            return null;
    }
}

export default function SubCategoriesController({Target}){
    const currentSubCategoriesElems = PrepareSubCategoresListElement(ContextsValues().currentSubCategoriesList[0]);
    const currentParentCategoriesElems = PrepareCategoresListElement(ContextsValues().currentCategoriesList[0]);
    return(
        <>
            {TargetCaller(Target, currentSubCategoriesElems, currentParentCategoriesElems)}
        </>
    );
}