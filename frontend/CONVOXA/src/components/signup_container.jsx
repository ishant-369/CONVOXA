import profile from "../assets/Dragon2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Signup_form() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/api/user/register/", {
        username,
        email,
        password,
      });

      alert("Account created successfully!");
      navigate("/login");
    }catch (error) {
        console.log(error.response?.data);
        alert(JSON.stringify(error.response?.data));
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="sub-sc1">
          <div className="logo">
            <h1>Convoxa</h1>
            <p>Connect • Share • Chat</p>
          </div>

          <div className="avatar-section flex flex-row justify-center">
            <img src={profile} id="preview" alt="Profile" />
          </div>
        </div>

        <div className="sub-sc2">
          <form onSubmit={handleSubmit} id="signupform">

            <input
              className="bg-black/20 text-white rounded-md px-3 py-2"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="bg-black/20 text-white rounded-md px-3 py-2"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-box">
              <input
                className="bg-black/20 text-white rounded-md px-3 py-2"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span>👁</span>
            </div>

            <input
              className="bg-black/20 text-white rounded-md px-3 py-2"
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              className="w-[100%]
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
              id="signup"
              type="submit"
            >
              Create Account
            </button>

          </form>

          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup_form;