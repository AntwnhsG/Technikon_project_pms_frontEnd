import React, { useState } from "react";
import { Link } from "react-router-dom";
import technikon from "../img/Frame.png";
import logo from "../img/Vector.png";
import "../listOfUsers/user/navbar.css";
import createbutton from "../img/createbutton.png";
import search from "../img/search.png";
import img from "../img/Img.png";
import Notification from "../img/Notifications_unread.png"
import menuDot from "../img/menu-dots-vert.png";
import AddUser from "../login/AddUser";
import AddAdmin from "./AddAdmin";



function NavbarAdmin({ keycloak }) {

    const [searchInput, setSearchInput] = useState("");
    const [showModalAdmin, setShowModalAdmin] = useState(false)
    const [showModalUser, setShowModalUser] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //const logOut = () => {
        const handleLogout = async () => {
        try {
            await keycloak.logout(); // Logout from Keycloak
            localStorage.removeItem("user")
      // After successful logout, redirect to login page or any other page
            //navigate('/login'); // Assuming you have a login route
        } catch (error) {
            console.error('Logout failed:', error);
        }
        };
    //}

    const toggleModalAdmin = () =>{
        setShowModalAdmin((show1) => !show1);
    }

    const toggleModalUser = () =>{
        setShowModalUser((show2) => !show2);
    }


    return (
        <div className="navbar navbar-expand-sm navbar-dark" style={{ background: "rgba(15, 70, 206, 1)", height: "72px", flexShrink: "0" }}>
            <Link to="/home">
                <img
                    src={logo}
                    alt="logo"
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                />
            </Link>
            <Link to="/home">
                <img src={technikon} alt="frame" />
            </Link>
            <div className="collapse navbar-collapse">
                <div className='d-flex ms-auto'>
                    <form className="d-flex" style={{ marginRight: "10px" }} >
                        <input
                            className="form-control me-2 alignenter"
                            type="text"
                            placeholder="Search here"
                            style={{
                                background: "rgba(255, 255, 255, 0.12)", color: "rgba(255, 255, 255, 0.50)",
                                border: "1px solid", borderRadius: "12px", display: "flex", width: "356px", height: "48px",
                                padding: "0px 4px 0px 8px", alignItems: "center", gap: "8px", flexShrink: "0", backgroundImage: `url(${search})`,
                                backgroundRepeat: 'no-repeat', backgroundPosition: 'left', textAlign: "center"
                            }}
                            onChange={handleChange}
                            value={searchInput}
                        />
                    </form>
                    <div >
                        <div className="dropdown">
                            <button className="dropbtn"><img src={createbutton}></img>create user</button>
                            <div className="dropdown-content">
                                <a onClick={toggleModalAdmin}>Admin</a>
                                <a onClick={toggleModalUser}>customer</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={img} style={{
                                marginTop: "10px",
                                marginLeft: "17px"
                            }} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={Notification}
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    marginTop: "8px",
                                    marginLeft: "16px"
                                }} />
                        </div>
                    </div>
                    <div>
                        <div className="dropdown" style={{direction: "rtl",}}>
                            <button className="dotmenu" style={{direction: "ltr",}}>
                                <img src={menuDot}
                                    style={{
                                        
                                        marginLeft: "9px"
                                    }} />
                            </button>
                            <div className="dropdown-content" style={{direction: "ltr",}}>
                                <a href="#">Settings</a>
                                <a onClick={handleLogout} href="/">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddUser showModal={showModalUser} toggleModal={toggleModalUser} />
            <AddAdmin showModal={showModalAdmin} toggleModal={toggleModalAdmin}/>
        </div>


    );
}

export default NavbarAdmin;
