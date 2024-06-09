import React from "react";
import { useState } from "react";
import { Modal, Form, Button, Row, Col} from "react-bootstrap";
import { createPropertyApi } from "../../api/PropertyApiService";

const AddProperty = ({ showModal, toggleModal }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [property, setProperty] = useState({
    e9Number: "",
    yearOfConstruction: "",
    propertyType: "",
    webUser: {
      id: "",
    },
    address: {
      street: "",
      number: "",
      city: "",
      pc: "",
    },
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;

    if (["number", "street", "pc", "city"].includes(name)) {
      setProperty((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [name]: value,
        },
      }));
    } else {
      setProperty((prevState) => ({ ...prevState, [name]: value }));
    }
    setProperty((prevState) => ({...prevState,
      webUser: {...prevState.webUser,id:userData.id}}))
    console.log(event.target.name)
  };

  const onPropertyTypeChange = (event) =>{
    console.log(event.target.value)
    setProperty((prevState)=> ({...prevState, propertyType: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(property)
    createPropertyApi(property)
      .then((response) => {
        console.log(response.data);
        toggleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Modal
      show={showModal}
      centered
      onHide={toggleModal}
      size="lg"
      style={{ borderRadius: "20px" }}
    >
      <div className="rounded-2">
        <Modal.Header closeButton style={{ borderBottom: 0 }}>
          <Modal.Title>Add Property</Modal.Title>
        </Modal.Header>
        <div style={{ background: "#DFE2E7" }}>
          <Modal.Body>
            <Form className="form" style={{color:"black"}}>
              <div
                style={{
                  width: "502px",
                  height: "80px",
                  marginBottom: "18px",
                }}
              >
                <Form.Group key="e9Number">
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    E9 Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="E9 Number"
                    name="e9Number"
                    value={property.e9Number}
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
                <Form.Group key="yearOfConstruction" style={{}}>
                  <Form.Label
                    style={{
                      marginBottom: "0px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    Construction Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Last Name e.g Williams"
                    name="yearOfConstruction"
                    value={property.yearOfConstruction}
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
                        value={property.address.street}
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
                        value={property.address.number}
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
                    <Form.Group key="pc">
                      <Form.Control
                        type="number"
                        placeholder="Postal Code e.g. 15400"
                        name="pc"
                        value={property.address.pc}
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
                        value={property.address.city}
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
              <div >
              <Form.Group key="propertyTypeGroup" as={Row} controlId={"propertyType"}>
              <Form.Label column sm="4">
                Property Type
              </Form.Label>
              <Col sm="10">
                <Form.Select
                style={{width: "502px",
                marginBottom: "18px",}}
                  aria-label="Default select example"
                  onChange={(e) => onPropertyTypeChange(e)}
                >
                  <option>Select property type</option>
                  <option name ="propertyType" value="0">Detached House</option>
                  <option name ="propertyType" value="1">Maisonette</option>
                  <option name ="propertyType" value="2">Apartment Building</option>
                  <option name ="propertyType" value="3">Flat</option>
                </Form.Select>
              </Col>
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
              Add Property
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
    </div>
  );
};

export default AddProperty;
