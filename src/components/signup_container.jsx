import profile from '../assets/Dragon2.png'
import { Link } from "react-router-dom";
import Signup from '../Signup';


function signup_form() {

    return <>
          

        <div className="signup-container">

            <div className='sub-sc1'>
                <div className="logo">
                    <h1>Convoxa</h1>
                    <p>Connect • Share • Chat</p>
                </div>
            
                <div className="avatar-section flex flex-row justify-center">
                    <img src={profile} id="preview" />

                    {/* <!-- <input type="file" id="avatar" accept="image/*"> --> */}
                </div>
            </div>    
            <div className='sub-sc2'>
                <form onSubmit={Signup} id='signupform'>

                    <input className="bg-black/20  text-white rounded-md px-3 py-2" type="text" id="username" placeholder="Username" />
                    <input className="bg-black/20  text-white rounded-md px-3 py-2" type="text" id="username" type="email" id="email" placeholder="Email" />
                    <div className="password-box">
                        <input className="bg-black/20  text-white rounded-md px-3 py-2" type="text" id="username" type="password" id="password" placeholder="Password" />
                        <span onclick="togglePassword()">👁</span>
                    </div>
                    <input className="bg-black/20  text-white rounded-md px-3 py-2" type="text" id="username" type="password" id="confirm-password" placeholder="Confirm   Password" />
                </form>


                <button className="w-[100%] 
                                   pb-[12px]
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
                                   id='signup'
                                   onclick="Signup()">Create Account</button>

                <p>
                    Already have an account?
                    <Link to="/">Login</Link>
                </p>
            </div>
        </div>

    </>

}

export default signup_form;