import Login_container from './components/login_container.jsx'
import './Login.css'
import dragonVideo from "./assets/dragon.mp4";


function Login(){
//     const form = document.getElementById('signupform');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);

//     console.log(formData.get('username'));
//     console.log(formData.get('email'));
//     console.log(formData.get('password'));
//     //Here you would typically send the form data to your backend server for processing
//     //For example, using fetch:
//     /*
//     fetch('/api/signup', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response from the server
//         console.log(data);
// })
//     .catch(error => {
//         console.error('Error:', error);
//     });
//     */
//    if (data.password.length < 6) {
//     alert("Password too short");
//     return;
// }
// });
return<>
    <div>
        <video
               className="background-video"
               autoPlay
               muted
               loop
               playsInline
            >
               <source src={dragonVideo} type="video/mp4" />
            </video>
    </div>
    <Login_container/>
</>
}

export default Login;