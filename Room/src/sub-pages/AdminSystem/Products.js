import {ContextsValues} from "../../helpers/ContextsValues.js"
import {PrepareCategoresListElement} from "./Categories.js"
import {PrepareSubCategoresListElement} from "./SubCategories.js"
import {AddProduct} from "../../API/Post"
import {RemoveProduct} from "../../API/Delete"
export function PrepareProductsListElement(T){
    return T.map(({Id, Title})=>
    <option key={Id} value={Id}>{Title}</option>
    )
}

function onClickAdd(e){
    e.preventDefault();
    let formData = new FormData();
    let inputs = document.querySelectorAll("input");
    let selects = document.querySelectorAll("select");
    let pcImages = Array.from(inputs[1].files)
    let mobileImages = Array.from(inputs[2].files)
    let title = inputs[0].value;
    let parentCategory = selects[0].value;
    let subCategory = selects[1].value;
    let price = inputs[3].value
    let description = document.querySelector("textarea").value
    pcImages.forEach(image => formData.append("pc-product-images", image))
    mobileImages.forEach(image => formData.append("mobile-product-images", image))
    formData.append("Title", title)
    formData.append("Description", description)
    formData.append("CategoryId", parentCategory)
    formData.append("SubCategoryId", subCategory)
    formData.append("Availability", 1)
    formData.append("Price", price)
    AddProduct(formData);
    document.querySelector("form").reset();
}

function AddProductContainer(currentCategoriesElems, currentSubCategoriesElems){
    return(
        <>
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select option</option>
                    {currentCategoriesElems}
                </select>
            </div>
            <div><span>SubCategory: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select option</option>
                    {currentSubCategoriesElems}
                </select>
            </div>
            <div><span>Images-PC: </span><input type="file" multiple={1} name="pc-product-images"/></div>
            <div><span>Images-Mobile: </span><input type="file" multiple={1} name="mobile-product-images"/></div>
            <div><span>Price: </span><input type="number" min="0"></input></div>
            <div><span>Description: </span><br></br><textarea maxLength="500"></textarea></div>
            <div><input type="submit" value="Add Product" onClick={(e) => onClickAdd(e)}></input></div>
        </>
    );
}

function UpdateProductContainer(currentProductsElems, currentCategoriesElems, currentSubCategoriesElem){
    return(
        <>
            <div><span>Productss: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a product</option>
                    {currentProductsElems}
                </select>
            </div>
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a Category</option>
                    {currentCategoriesElems}
                </select>
            </div>
            <div><span>SubCategory: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a subCategory</option>
                    {currentSubCategoriesElem}
                </select>
            </div>
            <div><span>Images-PC: </span><input type="file"/></div>
            <div><span>Images-Mobile: </span><input type="file"/></div>
            <div><span>Price: </span><input type="number" min="0"></input></div>
            <div><span>Description: </span><br></br><textarea maxLength="500"></textarea></div>
            <div><input type="submit" value="Update Product"></input></div>
        </>
    );
}


function onClickDelete(e){
    e.preventDefault();
    const productId = document.querySelector("select").value;
    RemoveProduct(productId)
}


function RemoveProductContainer(currentProductsElems){
    return(
        <>
            <div><span>Productss: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a product</option>
                    {currentProductsElems}
                </select>
            </div>
            <div><input type="submit" value="Remove Product" onClick={e => onClickDelete(e)}></input></div>
        </>
    );
}


function ShowAllProductsContainer(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

function TargetCaller(Target, currentProductsElems, currentCategoriesElems, currentSubCategoriesElems){
    switch (Target) {
        case "AddProduct":
            return AddProductContainer(currentCategoriesElems, currentSubCategoriesElems);
        case "RemoveProduct":
            return RemoveProductContainer(currentProductsElems);
        case "UpdateProduct":
            return UpdateProductContainer(currentProductsElems, currentCategoriesElems, currentSubCategoriesElems);
        case "ShowAllProducts":
            return ShowAllProductsContainer();
        default:
            console.log("no sub-path matched")
            return null;
    }
}

export default function ProductsController({Target}){
    const currentProductsElems = PrepareProductsListElement(ContextsValues().currentProductsRawData[0]);
    const currentCategoriesElems = PrepareCategoresListElement(ContextsValues().currentCategoriesList[0]);
    const currentSubCategoriesElems = PrepareSubCategoresListElement(ContextsValues().currentSubCategoriesList[0]);
    return(
        <>
            {TargetCaller(Target, currentProductsElems, currentCategoriesElems, currentSubCategoriesElems)}
        </>
    );
}