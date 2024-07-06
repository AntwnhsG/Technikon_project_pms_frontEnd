import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  //url: 'http://20.188.44.4:8180/', // URL to Keycloak instance
  url: 'http://keycloak.example.com',
  realm: 'FrontEndRealm', // Update with realm
  clientId: 'front-end-app', // Update with client ID
  // Add clientSecret if your client is configured as confidential
  // clientSecret: 'your-client-secret',
  // Add additional initialization options as needed
  // onLoad: 'login-required',
  //checkLoginIframe: false,
  // promiseType: 'native',
});

export default keycloak;

