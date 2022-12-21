import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
function Login(){
    return(
        <div class={{Animation}}>
            <p>This is Login and Registration part</p>
            <p><input type={Text} placeholder={"Email"} ></input>&nbsp;<b>Username</b><br></br></p>
            <p><input type={Text} placeholder={"Password"}></input>&nbsp;<b>Password</b></p>
            <alink>Forgot Password</alink><br></br>    {/*we can use diiferent tag here */}
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={Register}>Register</button>&nbsp;
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Sign-in</button>
        </div>  
    );
}
export default Login;