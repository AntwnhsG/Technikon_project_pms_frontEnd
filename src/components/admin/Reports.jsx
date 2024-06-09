import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { countUsersApi } from "../../api/UserApiService";
import { propertyRepairsReports } from "../../api/PropertyApiService";
import ListGroup from "react-bootstrap/ListGroup";
import { retrievePropertyApi } from "../../api/PropertyApiService";
import { retrieveAllUsersApi } from "../../api/UserApiService";
import { Dropdown } from "react-bootstrap";
import { countPropertiesApi } from "../../api/PropertyApiService";

function Reports() {
  const [numUsers, setNumUsers] = useState();
  const [numProperties, setNumProperties] = useState();
  const [repairPropertiesReports, setRepairPropertiesReports] = useState([]);
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'))
  const [tin, setTin] = useState(userData.tin);
  const [userId, setUserId] = useState();

  useEffect(() => {
    getNumUsers();
    getUsers();
    getNumProperties();
  }, []);

  const getNumUsers = async () => {
    countUsersApi().then((response) => {
      setNumUsers(response.data.data);
      console.log(numUsers);
    });
  };

  const getNumProperties = () => {
    countPropertiesApi().then((response) => {
      setNumProperties(response.data.data);
    });
  };

  const getUsers = async () => {
    retrieveAllUsersApi().then((response) => {
      setUsers(response.data.data);
    });
  };

  const getNumPropertyRepairsReports = async (id) => {
    setRepairPropertiesReports([]);
    propertyRepairsReports(id).then((response) => {
      setRepairPropertiesReports(response.data.data);
      console.log(response.data.data);
    });
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select user to see his total amount spent
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {users.map((user) => {
            return (
              
              <Dropdown.Item
                onClick={() => getNumPropertyRepairsReports(user.id)}
              >
                Total Cost for {user.firstName}
              </Dropdown.Item>
            
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup.Item>
        <Card>
          <Card.Body>
            <Card.Title>
              Total Registered Users: {numUsers}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Total Registered Properties: {numProperties}
            </Card.Title>
          </Card.Body>
        </Card>
      </ListGroup.Item>
      <ListGroup horizontal>
        {repairPropertiesReports?.map((propertyRepairReports) => {
          return (
            <ListGroup.Item key={propertyRepairReports.repairType}>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={house} /> */}
                <Card.Body>
                  <Card.Title>
                    REPORTS FOR TYPE: {propertyRepairReports.repairType}
                  </Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    STATUS: {propertyRepairReports.repairStatus}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    TOTAL COST OF REPAIRS: {propertyRepairReports.costOfRepair}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Reports;
