import React from 'react'
import {Outlet, useParams, Link, useOutletContext } from "react-router-dom";
import "../styles/Admin.css"



export default function Admin(){
    // let {username} = useParams();
    // username = username[0].toUpperCase().concat(username.substring(1, username.length)) // making first letter capictal WTF?
    const context = useOutletContext();
    let username = "Mohamad";
    let temp =  <Outlet/>;
    return(
        <div id="control-page">
            <div id="welcoming"><span>Welcome</span><span>{username}</span></div>
            <nav className='control-menu'>
                <div className='menu-item'>
                    <div className='menu-item-text'>Products</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/products/AddProduct`}>Add Product</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/products/RemoveProduct`}>Remove Product</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/products/UpdateProduct`}>Update Product</Link>
                        </div> 
                        <div className='sub-menu-item'>
                            <Link to={`/admin/products/ShowAllProducts`}>Show All Products</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>Categories</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/categories/AddCategory`}>Add Category</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/categories/RemoveCategory`}>Remove Category</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/categories/UpdateCategory`}>Update Category</Link>
                        </div> 
                        <div className='sub-menu-item'>
                            <Link to={`/admin/categories/ShowAllCategories`}>Show All Categories</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='menu-item-text'>Sub Categories</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/sub-categories/AddSubCategory`}>Add Sub Categories</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/sub-categories/RemoveSubCategory`}>Remove Sub Categories</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/sub-categories/UpdateSubCategory`}>Update Sub Categories</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/sub-categories/ShowAllSubCategories`}>Show All Sub Categories</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>Admins</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/admins/AddAdmin`}>Add Admin</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/admins/RemoveAdmin`}>Remove Admin</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/admins/UpdateAdmin`}>Update Admin</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/admins/ShowAllAdmins`}>Show All Admins</Link>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='menu-item-text'>Permessions</div>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/permessions/AddPermession`}>Add Permession</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/permessions/RemovePermession`}>Remove Permession</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/permessions/UpdatePermession`}>Update Permession</Link>
                        </div>
                        <div className='sub-menu-item'>
                            <Link to={`/admin/permessions/ShowAllPermessions`}>Show All Permessions</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}