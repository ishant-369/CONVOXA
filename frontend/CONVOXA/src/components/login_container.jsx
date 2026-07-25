// import { useNavigate } from "react-router-dom"; used in button method
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
function Login_container() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
    try {
        const res = await api.post("/api/token/", {
            username,
            password,
        });

        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        navigate("/");
    } catch (error) {
        alert("Invalid username or password");
    }
};
    return<> 
        <div>
            <div className="orb orb-top"></div>
            <div className="orb orb-left"></div>
            <div className="orb orb-right"></div>
            <div className="login-container">
                <div className="heading"><span className="text-[54px]">w</span>ELCOME <span className="text-[50px]">B</span>ACK</div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="password-box ">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>👁</span>
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
                                   onClick={handleLogin}>Login</button>
                <p>
                    Don't have an account?
                    {/* <a href="signup.html">Signup</a> */}
                    {/* <button  onClick={() => navigate("/Signup/")}>Signup</button>        this si the button method */}   
                    <Link to="/signup">Sign Up</Link>
                </p>
            </div>
            <div className="hidden form" id="signupform">
                <h2>Signup</h2>
                <p>
                    ALready have an account?
                    <a link>Login</a>
                </p>
            </div>
            {/* <script src="login.js"></script> */}
        </div>
    </>

}

export default Login_container;