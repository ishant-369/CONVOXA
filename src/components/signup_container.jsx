import profile from '../assets/Profile2.jpg'
import { Link } from "react-router-dom";
import Signup from '../Signup';


function signup_form() {

    return <>
          <div class="orb orb-top"></div>
          <div class="orb orb-left"></div> 
          <div class="orb orb-right"></div>

        <div className="signup-container">

            <div className="logo">
                <h1>Convoxa</h1>
                <p>Connect • Share • Chat</p>
            </div>

            <div className="avatar-section flex flex-row justify-center">
                <img src={profile} id="preview" />
                
                {/* <!-- <input type="file" id="avatar" accept="image/*"> --> */}
            </div>

        <form onSubmit={Signup} id='signupform'>
            
                <input type="text" id="username" placeholder="Username" />
                <input type="email" id="email" placeholder="Email" />
                <div className="password-box">
                    <input type="password" id="password" placeholder="Password" />
                    <span onclick="togglePassword()">👁</span>
                </div>
                <input type="password" id="confirm-password" placeholder="Confirm Password" />
        </form>


            <button onclick="Signup()">Create Account</button>

            <p>
                Already have an account?
                <Link to="/">Login</Link>
            </p>

        </div>

    </>

}

export default signup_form;