import React from "react";
import { BrowserRouter , NavLink , Navigate, Route , Routes } from "react-router-dom";
import './navlink.css'
import Products from "./products";
import Home from "./home";
import Member from "./member";

export default function Router4(){
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to = '/' 
                    className={({isActive}) => 
                        isActive? "active_menu":"menu"}
                    style={({isActive}) => {
                        return{
                            fontWeight: isActive ? "bold" : ""
                        };
                    }}>Home</NavLink> -&nbsp;
                <NavLink to = '/products' className={({isActive}) => isActive ? "active_menu" : "menu"}>
                    Products</NavLink> -&nbsp;
                <NavLink to = '/member' className={({isActive}) => isActive ? "active_menu" : "menu"}>
                    Member</NavLink> -&nbsp;
                <NavLink to = '/contact' className={({isActive}) => isActive ? "active_menu" : "menu"}>
                    Contact Us</NavLink>
            </nav>
            <Routes style = {{margin : '20px'}}>
                <Route path= "/" element = {<Home/>} />
                <Route path= "/products" element = {<Products/>} />
                <Route path= "/member" Component = {Member}/>
                <Route path= "/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
                <Route path= "/*" element = {<Navigate to = "/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}