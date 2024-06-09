import { useState } from "react";
import { Form, Button, } from "react-bootstrap";
import { loginUserApi } from "../../api/UserApiService";
import "./Login.css";
// import technikon from "../img/Frame.png";
// import logo from "../img/Vector.png";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import 'react-toastify/dist/ReactToastify.css';
import useNotification from "../WebSocket/AppSocket";

const Login = () => {

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);

  const [notifications, sendNotification] = useNotification();
  

  const onInputChange = (event) => {
    const { name: name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUserApi(credentials)
      .then((response) => {
        if (response.data.data === null) {
          alert("Wrong credentials");
        } else {
          sendNotification('/app/login',credentials.username)
          localStorage.setItem("tin", (response.data.data.tin))
          localStorage.setItem("id", (response.data.data.id))
          localStorage.setItem("role", (response.data.data.role))
          navigate("/home")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="image">
      <div className="gradient">
        <div>
          <div>
{/*             <img */}
{/*               src={logo} */}
{/*               alt="logo" */}
{/*               style={{ */}
{/*                 marginLeft: "32px", */}
{/*                 marginTop: "32px", */}
{/*                 marginRight: "9.51px", */}
{/*               }} */}
{/*             /> */}
{/*             <img src={technikon} alt="frame" style={{ marginTop: "32px" }} /> */}
          </div>
          <div className="definetelyNotModal">
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="body">
              <Form className="form">
                <div
                  style={{
                    width: "502px",
                    height: "106px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group key="username">
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      {" "}
                      Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={credentials.username}
                      onChange={(e) => onInputChange(e)}
                      style={{
                        border: "1px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                      }}
                    />
                  </Form.Group>
                </div>
                <div
                  style={{
                    width: "502px",
                    height: "106px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group key="password" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={credentials.password}
                      onChange={(e) => onInputChange(e)}
                      style={{
                        border: "1px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                      }}
                    />
                  </Form.Group>
                </div>
              </Form>
              <div className="forgotPasswordDiv">
                <a className="forgotPassword" href="#">
                  Forgot Password
                </a>
              </div>
              <div className="button">
                <Button
                  className="btn btn-primary"
                  type="submit"
                  size="lg"
                  onClick={handleSubmit}

                >
                  Sign In
                </Button>
              </div>
              <div className="or-line"
                // style={{
                //   marginLeft: "94px",
                //   marginRight: "94px",
                // }}
              >
                <hr/>
                
                <h6 style={{justifyContent:'center'}}>OR</h6>

                <hr/>
                
              </div>
              <div className="button">
                <Button
                  className="btn btn-primary"
                  type="button"
                  size="lg"
                  onClick={toggleModal}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddUser showModal={showModal} toggleModal={toggleModal} />
    </div>
  );
};

export default Login;
