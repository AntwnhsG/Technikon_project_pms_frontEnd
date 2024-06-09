import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { createRepairApi } from "../../api/RepairApiService";
import { Row, Col } from "react-bootstrap";

const AddRepair = ({ showModal, toggleModal, id }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [repair, setRepair] = useState({
    description: "",
    dateOfScheduledRepair: "",
    repairType: "",
    repairStatus: "",
    costOfRepair: "",
    webUser: {
      id: "",
    },
    property: {
      id: "",
    },
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;
    console.log(id)

    setRepair((prevState) => ({ ...prevState, [name]: value }));

    setRepair((prevState) => ({
      ...prevState,
      webUser: { ...prevState.webUser, id: userData.id },
    }));
    setRepair((prevState) => ({
      ...prevState,
      property: { ...prevState.property, id: id },
    }));
  };

  const onRepairTypeChange = (event) => {
    
    setRepair((prevState) => ({
      ...prevState,
      repairType: event.target.value,
    }));
  };

  const onRepairStatusChange = (event) => {
    setRepair((prevState) => ({
      ...prevState,
      repairStatus: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRepairApi(repair)
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
            <Modal.Title>Add Repair</Modal.Title>
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
                  <Form.Group key="description">
                    <Form.Label
                      style={{
                        marginBottom: "8px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Description
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={repair.description}
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
                  <Form.Group key="dateOfScheduledRepair" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "8px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Date Of Scheduled Repair
                    </Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Last Name e.g Williams"
                      name="dateOfScheduledRepair"
                      value={repair.dateOfScheduledRepair}
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
                  <Form.Group
                    key="repairTypeGroup"
                    as={Row}
                    controlId={"repairType"}
                  >
                    <Form.Label column sm="4">
                      Repair Type
                    </Form.Label>
                    <Col sm="10">
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => onRepairTypeChange(e)}
                        style={{width:"504px"}}
                      >
                        <option>Select property type</option>
                        <option name="repairType" value="0">
                          DAY_TO_DAY
                        </option>
                        <option name="repairType" value="1">
                          PREVENTIVE_MAINTENANCE
                        </option>
                        <option name="repairType" value="2">
                          ADDITIONS_ALTERATIONS
                        </option>
                        <option name="repairType" value="3">
                          ANNUAL_REPAIRS
                        </option>
                        <option name="repairType" value="4">
                          SPECIAL_REPAIRS
                        </option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </div>
                
                <div
                  style={{
                    width: "502px",
                    height: "80px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group
                    key="repairStatusGroup"
                    as={Row}
                    controlId={"repairStatus"}
                  >
                    <Form.Label column sm="4">
                      Repair Status
                    </Form.Label>
                    <Col sm="10">
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => onRepairStatusChange(e)}
                        style={{width:"504px"}}
                      >
                        <option>Select Repair Status</option>
                        <option name="repairStatus" value="0">
                          PENDING
                        </option>
                        <option name="repairStatus" value="1">
                          IN_PROGRESS
                        </option>
                        <option name="repairStatus" value="2">
                          CANCELED
                        </option>
                        <option name="repairStatus" value="3">
                          COMPLETED
                        </option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </div>
                <div
                  style={{
                    width: "502px",
                    height: "80px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group key="costOfRepair" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "8px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Cost Of Repair
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Cost"
                      name="costOfRepair"
                      value={repair.costOfRepair}
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
                Add Repair
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
export default AddRepair;
