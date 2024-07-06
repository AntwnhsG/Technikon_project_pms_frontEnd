# Project for Harokopio University MSc. 
This Frontend application functions as the UI for a website that allows customers to manage their properties and register/ handle repairs or renovations regarding the said properties.

# Frameworks - Tools used for implementation

This app was created using React framework which means the source code is written in Javascript.
For the UI components Bootstrap, custom CSS was used.
There is implementaion for websockets in order to integrate push notifications but currently it is not functional.

# Requirements

This application can function independently but will not show any UI because of Keycloak. In order to be functional, the application needs to connect with Keycloak (correctly configured as described below) and the Backend application found in the below URL. Also Kong is needed as an application gateway in oreder to hit the backend endpoints.

Backend URL: https://github.com/AntwnhsG/TechnikonProject-pms8

# Tools and Framework requirements

1) To run the application NODE JS must be installed. Version of NODE JS: 20.15.0
2) Keycloak needs to be installed or used from docker container.
3) Kong needs to be installed or userd from docker container.
   
# Setup

1) To setup this application, clone the repository from: https://github.com/AntwnhsG/Technikon_project_pms_frontEnd.git

2) Keycloak is needed as decribed above. A realm need to be created, from the Admin UI of keycloak, named FrontEndRealm. Then a client needs to be created named front-end-app.
   Create users and assign them roles. Important: the application expects 2 roles, one for user and one for admin. Any other role is not considered valid.

3) In Kong, CORS plugin needs to be created to accept this applications URL. Also the correct Kong service and routes need to be created as well. For service you can use your own host IP. But for routes if no changes are made to much yours, the ones that must be defined are:
   a) /
   b) /users
   b) /property
   d) /propertyRepair

5) From VScode (recommended), or any other IDE of your preference, in terminal run:
  a) command: npm i (to install any required packages/ libraries).
  b) command: npm start (to start the application).

# Note! 
Master repository is now configured to run with IPs used for this project. To use you own you must configure files Api.jsx (for Kong) and Keycloak.jsx

# Bellow is the default React readme.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
