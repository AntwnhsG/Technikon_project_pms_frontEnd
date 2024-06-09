import React,{useState} from "react";
import Toast from "react-bootstrap/Toast";
import { useEffect } from "react";
import useNotification from "../WebSocket/AppSocket";

function TabMenuAdmin(){
  const [notifications, sendNotification] = useNotification();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (notifications.length > 0) {
      setShow(true);
    }
  }, [notifications]);



return (
    <nav className="navbar navbar-expand-sm navbar-light" style={{background: '#FFF', height: "56px"}} >
      <div className="container-fluid" >
   
        <div className="collapse navbar-collapse" id="mynavbar" >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="profile"
                style={{ color: "black", fontSize: 18 }}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="properties"
                
                style={{ color: "black", fontSize: 18 }}
              >
                Properties
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
                href="listofusers"
                style={{ color: "black", fontSize: 18 }}
              >
                List of users
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
                href="/reports"
                style={{ color: "black", fontSize: 18 }}
              >
                Reports
              </a>
            </li>
            </ul>
        </div>
      </div>
      <div style= {{marginTop:"85px",marginRight:"50px"}}>
        {notifications.map((not) => (
          <Toast show={show} onClose={() => setShow(false)}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">New notification</strong>
              <small>Just now</small>
            </Toast.Header>
            <Toast.Body>{not}</Toast.Body>
          </Toast>
        ))}
      </div>
      {/* <AddContact
          showModal={showModal}
          toggleModal={toggleModal}
          addContact={addContact}
        /> */}
    </nav>
    
  );
}

export default TabMenuAdmin;