import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ListOfUsers from './components/listOfUsers/ListOfUsers';
import PropertyCard from './components/property/PropertyCard';
import Reports from './components/admin/Reports';
import Home from './components/home/Home';
import Profile from './components/tabMenuComponents/Profile';
import keycloak from './components/login/keycloak';

const AuthenticatedApp = () => (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout keycloak={keycloak}/>}>
          <Route path="home" element={<Home />}></Route>
          <Route path="properties" element={<PropertyCard />} />
          <Route path="listofusers" element={<ListOfUsers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        const authenticated = await keycloak.init({ onLoad: 'login-required' });
        console.log('Keycloak initialized:', authenticated);
        setIsAuthenticated(authenticated);
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
      } finally {
        setKeycloakInitialized(true);
      }
    };

    initializeKeycloak();
  }, []);

  if (!keycloakInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {isAuthenticated ? <AuthenticatedApp /> : <div>Loading...</div>}
    </div>
  );
};

export default App;



