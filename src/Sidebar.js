import React from "react";
import ReactDom from "react-dom";
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar1">
            <h3>Account <br/>Details</h3>
                <ul className="links">
                    <li>
                        <span className="material-symbols-outlined">overview</span>
                        <b><a className="linkanchor" href="#">Overview</a></b>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">mail</span>
                        <b><a className="linkanchor" href="#">mail</a></b>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">settings</span>
                        <b><a className="linkanchor" href="#">Contact us</a></b>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">logout</span>
                        <b><a className="linkanchor" href="#">Logout</a></b>
                    </li>
                </ul>
        </div>
        </div>
    );
    }

export default Sidebar;