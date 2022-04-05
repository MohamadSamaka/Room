import {GetAllPermissions} from "../../API/Get.js"
import {AddPermission} from "../../API/Post.js"
import {RemovePermission} from "../../API/Delete.js"
import {UpdatePermission} from "../../API/Put.js"


export function PreparePermissionsListElement(T){
    return T.map(({Id, Name})=>
        <option key={Id} value={Id}>{Name}</option>
    )
}

function onClickAdd(e){
    e.preventDefault();
    const name = document.querySelector("input").value;
    AddPermission(name);
    document.querySelector("form").reset();
}

function AddPermessionContainer(){
    return(
        <>
            <div><span>Name: </span><input type="text"></input></div>
            <div><input type="submit" value="Add Permission" onClick={ (e)=> onClickAdd(e)}></input></div>
        </>
    );
}

function onClickRemove(e){
    e.preventDefault(); 
    const subCategoryId = document.querySelector("select").value;
    if(!subCategoryId)
        console.log("Make sure of your inputs")
    else
        RemovePermission(subCategoryId);
    document.querySelector("form").reset();
}

function RemovePermessionContainer(currentPermissions){
    return(
        <>
            <div><span>Permissions: </span>
                <select id="slct" required="required" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled="disabled">Select a permission</option>
                    {currentPermissions}
                </select>
            </div>
            <div><input type="submit" value="Remove Permission" onClick={(e) => onClickRemove(e)}></input></div>
        </>
    );
}


function onClickUpdate(e){
    e.preventDefault();
    const permissionId = document.querySelector("select").value;
    const newName = document.querySelector("input").value;
    UpdatePermission(permissionId, newName);
    document.querySelector("form").reset();
}

function UpdatePermessionContainer(currentPermissions){
    return(
        <>
            <div><span>Update: </span>
                <select id="slct" required="required">
                    <option value="" disabled="disabled">Select a permission</option>
                    {currentPermissions}
                </select>
            </div>
            <div><span>To: </span><input type="text"></input></div>
            <div><input type="submit" value="Update Permission" onClick={(e) => onClickUpdate(e)}></input></div>
        </>
    );
}

function ShowAllPermessionsContainer(){
    return(
        <p>I WILL DO THIS PART LATER</p>
    );
}

function TargetCaller(Target, elems){
    switch (Target) {
        case "AddPermession":
            return AddPermessionContainer();
        case "RemovePermession":
            return RemovePermessionContainer(elems);
        case "UpdatePermession":
            return UpdatePermessionContainer(elems);
        case "ShowAllPermessions":
            return ShowAllPermessionsContainer();
        default:
            console.log("no sub-path matched")
            return null;
    }
}


export default function PermessionsController({Target}){
    const currentPermissions = GetAllPermissions([])[0];
    return(
        <>
            {TargetCaller(Target, PreparePermissionsListElement(currentPermissions))}
        </>
    );
}