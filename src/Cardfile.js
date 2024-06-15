import React from 'react';
import ReactDom from 'react-dom';
import './urls.css';

const Cardfile =()=>{
    return(
        <div className="Cardfile container-fluid" style={{'paddingTop':'30px','paddingBottom':'30px'}}>
            <div className="row d-flex justify-content-around">
                <div className="card col-sm-4" style={{'width':'300px','height':'300px','marginTop':'60px'}}>
                    <img src="https://www.w3schools.com/bootstrap4/la.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">ChatBot</h4>
                        <p className="card-text">AI chatbot</p>0
                    </div>
                    <button className="btn btn-primary">Go</button>
                </div>
                <div className="card col-sm-4" style={{'width':'300px','height':'300px','marginTop':'120px'}}>
                    <img src="https://www.w3schools.com/bootstrap4/la.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">ChatBot</h4>
                        <p className="card-text">AI chatbot</p>
                    </div>
                    <button className="btn btn-primary">Go</button>
                </div>
                <div className="card col-sm-4" style={{'width':'300px','height':'300px','marginTop':'60px'}}>
                    <img src="https://www.w3schools.com/bootstrap4/la.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">ChatBot</h4>
                        <p className="card-text">AI chatbot</p>
                    </div>
                    <button className="btn btn-primary">Go</button>
                </div>
            </div>
        </div>
    )
}

export default Cardfile;