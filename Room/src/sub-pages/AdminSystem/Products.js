function AddProduct(){
    return(
        <>
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category: </span>
                <select id="slct" required="required">
                    <option value="" disabled="disabled" selected="selected">Select option</option>
                    <option value="#">One</option>
                    <option value="#">Two</option>
                    <option value="#">Three</option>
                    <option value="#">Four</option>
                    <option value="#">Five</option>
                    <option value="#">Six</option>
                    <option value="#">Seven</option>
                </select>
            </div>
            <div><span>SubCategory: </span>
                <select id="slct" required="required">
                        <option value="" disabled="disabled" selected="selected">Select option</option>
                        <option value="#">One</option>
                        <option value="#">Two</option>
                        <option value="#">Three</option>
                        <option value="#">Four</option>
                        <option value="#">Five</option>
                        <option value="#">Six</option>
                        <option value="#">Seven</option>
                    </select>
            </div>
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
            <div><span>Title: </span><input type="text"></input></div>
            <div><span>Category: </span>
                <select id="slct" required="required">
                    <option value="" disabled="disabled" selected="selected">Select option</option>
                    <option value="#">One</option>
                    <option value="#">Two</option>
                    <option value="#">Three</option>
                    <option value="#">Four</option>
                    <option value="#">Five</option>
                    <option value="#">Six</option>
                    <option value="#">Seven</option>
                </select>
            </div>
            <div><span>SubCategory: </span>
                <select id="slct" required="required">
                    <option value="" disabled="disabled" selected="selected">Select option</option>
                    <option value="#">One</option>
                    <option value="#">Two</option>
                    <option value="#">Three</option>
                    <option value="#">Four</option>
                    <option value="#">Five</option>
                    <option value="#">Six</option>
                    <option value="#">Seven</option>
                </select>
            </div>
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
            <div><span>Id: </span><input type="text"></input></div>
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
    switch (Target) {
        case "AddProduct":
            return AddProduct();
        case "RemoveProduct":
            return RemoveProduct();
        case "UpdateProduct":
            return UpdateProduct();
        case "ShowAllProducts":
            return ShowAllProducts();
        default:
            console.log("no sub-path matched")
            return null;
    }
}