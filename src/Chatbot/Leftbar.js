import React, { useContext,useEffect } from "react";
import "./urls.css";
import "./Leftbar.css";
import logo from "./preview.webp";
import { SearchContext } from "./SearchContext";

const Leftbar = () => {
  const { search } = useContext(SearchContext);
  useEffect(()=>{
    document.querySelector('.closebtn').addEventListener('click',()=>{
      document.querySelector('.leftbar').style.display='none';
    })
  },[])
  return (
    <div className="leftbar">
      <div className="leftsidebar">
        <div className="leftsidebar-header">
          <div className="logoblock">
            <h1>
            <b><img src={logo} width="35px" alt="logo" />
              Chat App</b>
            </h1>
            <span className="material-symbols-outlined closebtn">close</span>
             
          </div>
          <div className="newchat">
            <button onClick={()=>window.open("/","_blank")} className="newchatbutton"> + New Chat</button>
          </div>
        </div>
        <div className="leftsidebar-body">
          <h3 style={{'marginLeft':'10px'}}>Recent Searches</h3>
          <ul className="searches">
            {search.map((item, index) => (
              <li key={index}>
                <span className="material-symbols-outlined">search</span>
                <b>
                  <a className="anchor"  href="#">
                    {item.length > 20 ? item.slice(0, 20) + "..." : item}
                  </a>
                </b>
              </li>
            ))}
          </ul>
         
        </div>
        <div className="leftsidebar-tail">
          <ul className="links">
            <li>
                <span className="material-symbols-outlined">overview</span>
                <b><a className="linkanchor">History</a></b>
            </li>
            <li>
                <span className="material-symbols-outlined">overview</span>
                <b><a className="linkanchor">History</a></b>
            </li>
            <li>
                <span className="material-symbols-outlined">overview</span>
                <b><a className="linkanchor">History</a></b>
            </li>
            <li>
                <span className="material-symbols-outlined">overview</span>
                <b><a className="linkanchor">History</a></b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
