import React, { useState, useEffect } from 'react';

const UserProfile = ({ keycloak }) => {
  const [user, setUser] = useState({
    tin: "",
    firstName: "",
    surname: "",
    email: "",
    username: "",
    role: "",
  });

  useEffect(() => {
    if (keycloak && keycloak.authenticated) {
      keycloak.loadUserProfile().then(profile => {
        setUser({
          tin: profile.attributes?.tin ? profile.attributes.tin[0] : "",
          firstName: profile.firstName,
          surname: profile.lastName,
          email: profile.email,
          username: profile.username,
          role:  // Set this to the appropriate role if available
        });
      }).catch(err => {
        console.error('Failed to load user profile', err);
      });
    }
    console.log(user)
  }, [keycloak]);
};

export default UserProfile;
