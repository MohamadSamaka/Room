import React from 'react'
import {Outlet, useParams, NavLink, Link} from "react-router-dom";
import "../styles/Admin.css"



export default function Admin(){
    let {username} = useParams();
    const activeClassName = "active-nav"
    username = username[0].toUpperCase().concat(username.substring(1, username.length)) // making first letter capictal WTF?
    // let a = <Outlet/>;
    // console.log(a);
    console.log("atoo")
    return(
        <div id="control-page">
            <div id="welcoming"><span>Welcome</span><span>{username}</span></div>
            <nav className='control-menu'>
                <div className='menu-item'>
                    <div className='menu-item-text'>Products</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/products/AddProduct`}>Add Product</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/products/RemoveProduct`}>Remove Product</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/products/UpdateProduct`}>Update Product</Link>
                        </div> 
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/products/ShowAllProducts`}>Show All Products</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>Categories</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/categories/AddCategory`}>Add Category</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/categories/RemoveCategory`}>Remove Category</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/categories/UpdateCategory`}>Update Category</Link>
                        </div> 
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/categories/ShowAllCategories`}>Show All Categories</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>Admins</div>
                    <div className='sub-menu'>
                    <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/admin/AddAdmin`}>Add Admin</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/${username}/admin/RemoveAdmin`}>Remove Admin</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>Permessions</div>
                    <div className='sub-menu'></div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}