import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createUserApi } from "../../api/UserApiService";
import "../login/AddUser.css";

const AddAdmin = ({ showModal, toggleModal }) => {
  const [user, setUser] = useState({
    tin: "",
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    address: {
      street: "",
      number: "",
      city: "",
      pc: "",
    },
    role: "admin",
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;

    if (["number", "street", "pc", "city"].includes(name)) {
      setUser((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [name]: value,
        },
      }));
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal();
    createUserApi(user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      show={showModal}
      centered
      onHide={toggleModal}
      size="lg"
      style={{ borderRadius: "20px" }}
    >
      <div className="rounded-2">
        <Modal.Header closeButton style={{ borderBottom: 0 }}>
          <Modal.Title>Create Admin</Modal.Title>
        </Modal.Header>
        <div style={{ background: "#DFE2E7" }}>
          <Modal.Body>
            <Form className="form" style={{ color: "black" }}>
              <div
                style={{
                  width: "502px",
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Group key="firstName">
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    FirstName
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name: e.g. John"
                    name="firstName"
                    value={user.firstName}
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
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Group key="surname" style={{}}>
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name e.g Williams"
                    name="surname"
                    value={user.surname}
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
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Group key="phoneNumber" style={{}}>
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 0123456789"
                    name="phoneNumber"
                    value={user.phoneNumber}
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
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Label
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                  }}
                >
                  Address
                </Form.Label>
                <div style={{ columnCount: "4" }}>
                  <div className="address">
                    <Form.Group key="street" style={{}}>
                      <Form.Control
                        type="text"
                        placeholder="Street Name e.g. Omirou"
                        name="street"
                        value={user.address.street}
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
                  <div className="address">
                    <Form.Group key="streetNumber" style={{}}>
                      <Form.Control
                        type="number"
                        placeholder="Sreet Number e.g. 8"
                        name="number"
                        value={user.address.number}
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
                  <div className="address">
                    <Form.Group key="pc" style={{}}>
                      <Form.Control
                        type="number"
                        placeholder="Postal Code e.g. 15400"
                        name="pc"
                        value={user.address.pc}
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
                  <div className="address">
                    <Form.Group key="city" style={{}}>
                      <Form.Control
                        type="text"
                        placeholder="City e.g. Athens"
                        name="city"
                        value={user.address.city}
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
                </div>
              </div>
              <div
                style={{
                  width: "502px",
                  height: "80px",
                  marginBottom: "18px",
                  columnCount: "2",
                }}
              >
                <div className="emailTin" style={{}}>
                  <Form.Group key="email" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@scytalys.com"
                      name="email"
                      value={user.email}
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

                <div className="emailTin">
                  <Form.Group key="tin" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      TIN
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Tax ID"
                      name="tin"
                      value={user.tin}
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
              </div>
              <div
                style={{
                  width: "502px",
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Group key="username" style={{}}>
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your username"
                    name="username"
                    value={user.username}
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
                  marginBottom: "0px",
                  paddingLeft: "4px",
                  paddingRight: "4px",
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
                    placeholder="Your password"
                    name="password"
                    value={user.password}
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
          </Modal.Body>

          <Modal.Footer style={{ borderTop: 0 }}>
            <Button
              className="register"
              variant="primary"
              onClick={handleSubmit}
              style={{
                background: "#0F46CE",
                borderColor: "#0F46CE",
                alignContent: "left",
              }}
            >
              Register
            </Button>
            <Button
              className="cancel"
              variant="secondary"
              onClick={toggleModal}
              style={{
                background: "transparent",
                borderColor: "#0F46CE",
                color: "#0F46CE",
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
};

export default AddAdmin;
