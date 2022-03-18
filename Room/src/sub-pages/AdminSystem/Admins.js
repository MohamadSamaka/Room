function AddAdmin(){
    return(
        <>
            <div><span>Name: </span><input type="text"></input></div>
            <div><span>Password: </span><input type="text"></input></div>
           <div><span>Permessions</span>
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

function UpdateAdmin(){
    return(
        <>
            <div><span>Id: </span><input type="number" min="1"></input></div>
            <div><span>Permessions</span>
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

function RemoveAdmin(){
    return(
        <>
            <div><span>Id: </span><input type="text"></input></div>
            <div><input type="submit"></input></div>
        </>
    );
}

function ShowAllAdmins(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}



export default function Admins({Target}){
    switch (Target) {
        case "AddAdmin":
            return AddAdmin();
        case "RemoveAdmin":
            return RemoveAdmin();
        case "UpdateAdmin":
            return UpdateAdmin();
        case "ShowAllAdmins":
            return ShowAllAdmins();
        default:
            console.log("no sub-path matched")
            return null;
    }
}