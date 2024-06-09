import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://127.0.0.1:8180/', // Update this URL to your Keycloak instance
  realm: 'FrontEndRealm', // Update with your realm
  clientId: 'front-end-app', // Update with your client ID
  // Add clientSecret if your client is configured as confidential
  // clientSecret: 'your-client-secret',
  // Add additional initialization options as needed
  // onLoad: 'login-required',
  // checkLoginIframe: false,
  // promiseType: 'native',
});

export default keycloak;

