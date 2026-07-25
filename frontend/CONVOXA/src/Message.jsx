


function Message_page() {

    const usersContainer = document.getElementById('users-container');
    function addUser(username){
    const userDiv = document.createElement("div");
    userDiv.classList.add("friend");
    userDiv.textContent = username;
    usersContainer.appendChild(userDiv);    
    
    window.alert("A girl from your area wants to sleep with you");
    
    

}

    return <>
        <header className="flex space-between align-centre">
            <h2>Convoxa</h2>
            <div className="icons">
                <button>⚙️</button>
                <button>👤</button>
                <a href="signup.html">
                    <button>Sign-up</button>
                </a>
            </div>
        </header>
        <div className="container">
            <div className="friends-list">
                <h3>Messages</h3>
                <div id="users-containers">
                    {/* <!-- users will appear here --> */}
                </div>
            </div>
            <div className="search-bar">
                <span className="search-icon">🔍</span>

                <input
                    type="text"
                    id="searchUser"
                    placeholder="Search users..."

                />
            </div>
            <div id="users-container">
                {/* <!-- users appear here --> */}
            </div>
        </div>
    


        <script src="random.js"></script>
    </>
}

export default Message_page;