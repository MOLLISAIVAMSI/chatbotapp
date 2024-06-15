import React from 'react';
import ReactDom from 'react-dom';
import './Content.css';
import './urls.css';


const Content = () =>{
    return(
        <div className="container mar text-center " >
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="los" className="d-block w-100 rounded" />
                    <div className="carousel-caption">
                        <h2>ChatBot</h2>
                        <p>AI based chats</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="chicago" className="d-block w-100 rounded" />
                    <div className="carousel-caption">
                        <h2>Messenger</h2>
                        <p>chat with friends</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
          
        </div> 
        
        
      

        </div>
    )
}

export default Content;