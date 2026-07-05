// import { useNavigate } from "react-router-dom"; used in button method
import { Link } from "react-router-dom";

function Login_container() {

    // const navigate = useNavigate();

    return<> 
        <div>
            <div className="orb orb-top"></div>
            <div className="orb orb-left"></div>
            <div className="orb orb-right"></div>
            <div className="login-container">
                <h2>Login</h2>
                <input type="email" id="loginUser" placeholder="Email" />
                <div className="password-box">
                    <input type="password" id="password" placeholder="Password" />
                    <span onclick="togglePassword()">👁</span>
                </div>
                <button onClick="login()">Login</button>
                <p>
                    Don't have an account?
                    {/* <a href="signup.html">Signup</a> */}
                    {/* <button  onClick={() => navigate("/Signup/")}>Signup</button>        this si the button method */}   
                    <Link to="/signup/">Sign Up</Link>
                </p>
            </div>
            <div className="hidden form" id="signupform">
                <h2>Signup</h2>
                <p>
                    ALready have an account?
                    <a link>Login</a>
                </p>
            </div>
            <script src="login.js"></script>
        </div>
    </>

}

export default Login_container;