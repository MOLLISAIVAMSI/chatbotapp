import React from "react";
import ReactDom from "react-dom";
import './Top.css'
import Login from './Login.js'
import { useState } from "react";
import './urls.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
import './urls.css'
import log from './Log.png'
import logo from './preview.webp'
import Contact from "./Contact.js";
import { Link } from "react-router-dom";

function Top() {
    const [login, setLogin] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menubar, setMenubar] = useState(false);
    const [contact, setContact] = useState(false);
    const [about, setAbout] = useState(false);
    const [home, setHome] = useState(false);

    const handleHome = () => {
        setHome(prevHome => !prevHome);
        document.querySelector('.home').style.marginTop='0px';
        document.querySelectorAll('.home').forEach((element) => {
            element.style.display='block';
        })
        document.querySelectorAll('.foot').forEach((element) => {
            element.style.display='none';
        })
    }
    const handleAbout = () => {
        setContact(prevAbout => !prevAbout);
        document.querySelectorAll('.home').forEach((element) => {
            element.style.display='none';
        })
        document.querySelectorAll('.foot').forEach((element) => {
            element.style.display='block';
        })
    }
    const handleMenu = () => {
        if(menu){
            setMenu(false);
            document.querySelector('.sidebar').style.display='block';
        }   
        else{
            setMenu(true);
            document.querySelector('.sidebar').style.display='none';
        }
    }
    const handleMenubar = () => {
        if(menubar){
            setMenubar(false);
            document.querySelector('.Menubar').style.display='block';
        }   
        else{
            setMenubar(true);
            document.querySelector('.Menubar').style.display='none';
        }
    }
    const handlelogin = () => {
        if(login){
            setLogin(false);
            document.querySelector('.home').style.filter='blur(0px)';
        }
        else{
            setLogin(true);
            document.querySelector('.home').style.filter='blur(10px)';
        }
    }

  return (
    <div className="headerPart">
       
        <header>
            <div className="navbar d-flex justify-content-between" >
                <div className="d-flex justify-content-start">
                    <a href="#" className="logo">
                        <span className="material-symbols-outlined menu" style={{'backgroundColor':'pink','color':'white','border-radius':'4px'}} onClick={handleMenubar}>menu</span> 
                        <img src={logo} height='32px' width='32px'  />      
                        <h2 style={{'color':'pink'}}>Intelligenica</h2>
                        <ul className="features">
                            <li><a className="cur" style={{'color':'pink'}} onClick={handleHome}><b>Home</b></a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle cur " data-bs-toggle="dropdown" style={{'color':'pink'}} href="#"><b>Stores</b></a>
                                <ul className="dropdown-menu" >
                                    <li><a >Home 1</a></li>
                                    <li><a >Home 2</a></li>
                                    <li><a >Home 3</a></li>
                                </ul>
                            </li>
                            <li><a className="cur" onClick={handleAbout} style={{'color':'pink'}}><b>About us</b></a></li>
                        </ul>
                    </a>      
                </div>
               
                <div className="d-flex justify-content-end" style={{'right':'20px','position':'fixed'}}>
                    <input  type="text" placeholder="Search" />
                    <button className="bg" style={{'marginLeft':'10px','marginRight':'10px','backgroundColor':'#A440AE','color':'black'}} onClick={handlelogin} ><b>Sign in</b></button>
                    {login && <Login className="log" />}   
                    <img src={log} className='rounded-pill'height='32px' width='32px' onClick={handleMenu} />  
                </div>
            </div>
     
        </header>

    </div>
  );
}

export default Top;