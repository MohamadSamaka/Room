function AddPermession(){
    return(
        <>
            {/* <div><span>Id</span><input type="text"></input></div> */}
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function RemovePermession(){
    return(
        <>
            <div><span>Name: </span>
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
            <div><input type="submit"></input></div>
        </>
    );
}

function UpdatePermession(){
    return(
        <>
            <div><span>Name: </span>
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
            <div><input type="submit"></input></div>
        </>
    );
}

function ShowAllPermessions(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

export default function PermessionsController({Target}){
    switch (Target) {
        case "AddPermession":
            return AddPermession();
        case "RemovePermession":
            return RemovePermession();
        case "UpdatePermession":
            return UpdatePermession();
        case "ShowAllPermessions":
            return ShowAllPermessions();
        default:
            console.log("no sub-path matched")
            return null;
    }
}