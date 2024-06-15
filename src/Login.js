import React from "react";
import './Login.css'
import { useState } from "react";
const Login=()=>{
    const [login, setLogin] = useState(false);
    const [log, setLog] = useState(false);

    const handlelog = () => {
        if(login){
            setLogin(false);
            document.querySelector('.login2').style.display='none';
            document.querySelector('.login1').style.display='flex';
        }
        else{
            setLogin(true);
            document.querySelector('.login2').style.display='flex';
            document.querySelector('.login1').style.display='none';
        }
    }
    const closelogin=()=>{
        setLogin(false);
        document.querySelector('.login1').style.display='none';
        document.querySelector('.login2').style.display='none';
    }
    return(
        <div className="popup">
            <div className="login1">
                <span class="close" onClick={closelogin}> &#10006; </span>

                <div className="side1">
                    <p>Welcome Back to Intelligenica</p>
                </div>

                <div className="side2">
                    <h1>Log in</h1>
                    <form>
                        <label for="email" className="blue">Email</label><br/>
                        <input type="text" id="email" name="email" placeholder="Email"/><br/>
                        <label for="password" className="blue">Password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Password"/><br/>
                        <a className="text">Forgot Password?</a>
                        <br/>
                        <button className="loginbutton">Sign in</button><br/>
                        <div style={{textAlign:'center'}} >
                            <span className="blue">Don't have an account?</span><a onClick={handlelog}>Sign up</a>
                        </div>                  
                    </form>
                </div>
            </div>
            <div className="login2">
                <span class="close" onClick={closelogin}> &#10006; </span>

                <div className="side1">
                    <p>Welcome to Intelligenica</p>
                </div>

                <div className="side2">
                    <h1>Sign in</h1>
                    <form>
                        <label for="email" className="blue">Email</label><br/>
                        <input type="text" id="email" name="email" placeholder="Email"/><br/>
                        <label for="password" className="blue">Create Password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Password"/><br/>
                        <input type='checkbox' id='check' name='check' value='check'/><label className="text2" for='check'>I agree T&Cs</label><br/>
                        <br/>
                        <button className="loginbutton">Sign in</button><br/>                
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Login;

