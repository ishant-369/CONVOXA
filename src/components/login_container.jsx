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
                <div className="heading"><span className="text-[54px]">w</span>ELCOME <span className="text-[50px]">B</span>ACK</div>
                <input type="email" id="loginUser" placeholder="Email" />
                <div className="password-box">
                    <input type="password" id="password" placeholder="Password" />
                    <span onclick="togglePassword()">👁</span>
                </div>
                <button className="w-[70%] 
                                   p-3
                                   border-none 
                                   rounded-[25px] 
                                   bg-[rgba(0,255,255,0.233)] 
                                   text-white 
                                   font-bold 
                                   cursor-pointer 
                                   transition-all 
                                   duration-100 
                                   ease-in-out
                                   hover:scale-[1.03]"
                                   id="login"
                                   onClick="login()">Login</button>
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