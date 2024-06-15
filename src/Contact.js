import React from "react";
import ReactDom from "react-dom";
import "./urls.css";
import "./Contact.css";
import logo from './preview.webp'

const Contact = () => {
    return(
        <div className="Contact"> 
            <div className="container-fluid text-center" style={{'paddingTop':'150px','paddingBottom':'100px'}}>
                <div className="row">
                    <div className="col-sm-4">
                        <div lassName="loginline">    
                            <h2 style={{'display':'inline','padding':'15px','color':'pink'}}><img className="base" style={{'paddingBottom':'5px'}} src={logo} height='35px' width='30px'  />  Intelligenica</h2>
                        </div>
                        <br/>
                        <br/>
                        <p>Tel: 123-456-7890</p>
                        <br/>
                        <p>email: info@mysite.com</p>
                        <br/>
                        <p>500 Terry Francine Street,</p>
                        <p>San Francisco, CA 94158</p>
                        <br/>
                    </div>
                    <div className="col-sm-4 col2">
                        <br/>
                        <p>Solutions</p>
                        <p>Vision</p>
                        <p>Programs</p>
                        <p>Blog</p><br/>
                        <button>Get Started</button>
                    </div>
                    <div className="col-sm-4 col3">
                        <br/>
                        <p>Subscribe to Our Newsletter</p>
                        <label>Enter your email*</label><br/>
                        <input type="email" placeholder="Enter your email" /><br/>
                        <label>Description*</label><br/>
                        <textarea placeholder="Enter your message"></textarea><br/><br/>
                        <button>Get Started</button>
                    </div>
                
                </div>
                <div>
                    <div className="container-fluid  text-center mt-3" style={{'paddingTop':'30px','paddingBottom':'30px'}}>
                        <p>Follows on social media</p>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.google.com" target="_blank"><i class="fab fa-google"></i></a>
                            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                        </div>
                        <br/>
                        <pre>
                            @2035 by Intelligenica.<br/>
                            powered by Intelligenica
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;