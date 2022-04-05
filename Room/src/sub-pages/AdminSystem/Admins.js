import {GetAllAdmins} from "../../API/Get.js"
import {GetAllPermissions} from "../../API/Get.js"
import {PreparePermissionsListElement} from "./Permissions"
import {AddAdmin} from "../../API/Post.js"
import {RemoveAdmin} from "../../API/Delete.js"
import {UpdateAdmin} from "../../API/Put.js"

// import {ContextsValues} from "../../helpers/ContextsValues.js"

function PrepareAdminsListElement(T){
    return T.map(({Id, UserName})=>
        <option key={Id} value={Id}>{UserName}</option>
    )
}

function onClickAdd(e){
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const name = inputs[0].value;
    const password = inputs[1].value;
    const email = inputs[2].value;
    const permissionId = document.querySelector("select").value;
    AddAdmin(name, password, email, permissionId);
    document.querySelector("form").reset();
}

function AddAdminContainer(CurrentPermissions){
    return(
        <>
            <div><span>Name: </span><input type="text"></input></div>
            <div><span>Password: </span><input type="text"></input></div>
            <div><span>Email: </span><input type="text"></input></div>
           <div><span>Permession</span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a permission</option>
                    {CurrentPermissions}
                </select>
           </div>
           <div><input type="submit" value="Add Admin" onClick={(e) => onClickAdd(e)}></input></div>
        </>
    );

}


function onClickRemoveAdmin(e){
    e.preventDefault();
    const adminId = document.querySelector("select").value
    RemoveAdmin(adminId)
    document.querySelector("form").reset();
}

function RemoveAdminContainer(currentAdmins){
    return(
        <>
             <div><span>Admins: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select an admin</option>
                    {currentAdmins}
                </select>
            </div>
            <div><input type="submit" value="Remove Admin" onClick={(e) => onClickRemoveAdmin(e)}></input></div>
        </>
    );
}


function onClickUpdate(e){
    e.preventDefault();
    const selects = document.querySelectorAll("select");
    const inputs = document.querySelectorAll("input");
    const adminId = selects[0].value
    const name = inputs[0].value;
    const password = inputs[1].value;
    const email = inputs[2].value;
    const permissionId = selects[1].value;
    UpdateAdmin(adminId, name, password, email, permissionId)
    document.querySelector("form").reset();
}

function UpdateAdminContainer(currentAdmins, CurrentPermissions){
    return(
        <>
            <div><span>Admins: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select an admin</option>
                    {currentAdmins}
                </select>
            </div>
            <div><span>Name: </span><input type="text"></input></div>
            <div><span>Password: </span><input type="text"></input></div>
            <div><span>Email: </span><input type="text"></input></div>
            <div><span>Permession</span>
                    <select id="slct" required="required" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled="disabled">Select a permission</option>
                        {CurrentPermissions}
                    </select>
            </div>
            <div><input type="submit" value="Add Admin" onClick={(e) => onClickUpdate(e)}></input></div>
        </>
    );
}


function ShowAllAdminsContainer(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}


function TargetCaller(Target, AdminElems, PermissionsElems){
    switch (Target) {
        case "AddAdmin":
            return AddAdminContainer(PermissionsElems);
        case "RemoveAdmin":
            return RemoveAdminContainer(AdminElems);
        case "UpdateAdmin":
            return UpdateAdminContainer(AdminElems, PermissionsElems);
        case "ShowAllAdmins":
            return ShowAllAdminsContainer();
        default:
            console.log("no sub-path matched")
            return null;
    }
}


export default function Admins({Target}){
    const currentAdmins = GetAllAdmins([])[0];
    const currentPermissionsElems = PreparePermissionsListElement(GetAllPermissions([])[0])
    return(
        <>
            {TargetCaller(Target, PrepareAdminsListElement(currentAdmins), currentPermissionsElems )}
        </>
    );
}