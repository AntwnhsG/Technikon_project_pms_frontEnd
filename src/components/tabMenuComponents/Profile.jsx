import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { retrieveUserApi } from '../../api/UserApiService';
import editimg from '../img/edit.png';
import EditCard from '../editCards/EditCard';

const Profile = () => {
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData.id);

  const getUser = () => {
    retrieveUserApi(userData.id)
      .then((response) => {
        setUser(response.data.data);
      });
  };

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  useEffect(() => {
    getUser();
  }, [showModal]);

  return (
    <div>
      <div style={{ columnCount: '6', marginTop: '40px', marginLeft: '50px' }}>
        <h6>Name</h6>
        <h6>Last Name</h6>
        <h6>E-mail</h6>
        <h6>Tax ID Number</h6>
        <h6>Actions</h6>
      </div>

      <Card style={{ border: '0', width: '1720px', marginLeft: '40px' }}>
        <Table className="usersTable" style={{ marginTop: '10px' }}>
          <tbody>
            <tr>
              <td style={{ border: '0', width: '326px', marginLeft: '30px' }}>
                {user.firstName}
              </td>
              <td style={{ border: '0', width: '250px' }}>
                {user.surname}
              </td>
              <td style={{ border: '0', width: '-350px' }}>{user.email}</td>
              <td style={{ border: '0', width: '288px' }}>
                <div style={{ marginLeft: '-300px' }}>{user.tin}</div>
              </td>
              <td style={{ border: '0', width: '286px' }}>
                <button
                  style={{
                    marginLeft: '120px',
                    marginRight: '10px',
                    border: '0',
                    background: 'white',
                  }}
                  onClick={toggleModal}
                >
                  <img src={editimg} alt="edit" />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <EditCard showModal={showModal} toggleModal={toggleModal} />
    </div>
  );
};

export default Profile;
