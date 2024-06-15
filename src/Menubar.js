import React from "react";
import ReactDom from "react-dom";
import './Menubar.css'
const Menubar = () => {
    return (
        <div className="Menubar">
        <div className="Menubar1">
            <h3>Services<br/>offered</h3>
                <ul className="links">
                    <li>
                        <span className="material-symbols-outlined">dashboard</span>
                        <b><a className="linkanchor" href="#">TalkBot</a></b>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">message</span>
                        <b><a className="linkanchor" href="#">Message</a></b>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">location_on</span>
                        <b><a className="linkanchor" href="#">Locator</a></b>
                    </li>
                </ul>
            
        </div>
        </div>
    );
    }

export default Menubar;