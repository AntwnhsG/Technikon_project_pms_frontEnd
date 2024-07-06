// import { Outlet } from "react-router-dom";
// import "./Layout.css";
// import TabMenu from "../listOfUsers/user/TabMenu";
// import TabMenuAdmin from "../admin/TabMenuAdmin";
// import Navbar from "../listOfUsers/user/navbar";
// import NavBarAdmin from "../admin/navbarAdmin"
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState, createContext, useContext } from "react";
// import { addUserToDB } from "../../api/UserApiService";

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// const Layout = (props) => {
//   const navigate = useNavigate();
//   const { keycloak } = props;
//   const [user, setUser] = useState(null);

//   let role = null;
//   const loadUserProfile = async (keycloak) => {
//     if (keycloak && keycloak.authenticated) {
//       try {
//         const profile = await keycloak.loadUserProfile();
//         return {
//             tin: profile.attributes?.tin ? profile.attributes.tin[0] : "",
//             firstName: profile.firstName || "",
//             surname: profile.lastName || "",
//             email: profile.email || "",
//             username: profile.username || "",
//             role: role
// };
//       } catch (err) {
//         console.error('Failed to load user profile', err);
//         throw err;
//       }
//     }
//     throw new Error('Keycloak is not authenticated');
//   };

//   if (keycloak.authenticated) {
//     const token = keycloak.token;

//   // Decode the token to extract user information
//     const decodedToken = keycloak.tokenParsed;

//   // Extract user roles from the decoded token
//     const resourceAccess = decodedToken.resource_access;

//     role = resourceAccess['front-end-app'].roles[0];
//  }
//     loadUserProfile(keycloak)
//     .then((loggedUser) => {
//         if(user === null){
//             addUserToDB(loggedUser)
//             .then((response) => {
//                 localStorage.setItem('user', JSON.stringify(response.data.data));
//             })
//             .catch((error) => {
//               console.log(error)
//             })
//         }
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//   if (localStorage.getItem('user') !== null) {
//     if (role === "user") {
//       return (
//             <div className="Layout">
//             <Navbar keycloak = {keycloak}/>
//             <TabMenu />
//             <main>
          
//                 <Outlet />
//             </main>
//             </div>
//         );
//         }else if(role === "admin"){
//         return (
//             <div className="Layout">
//              <NavBarAdmin keycloak = {keycloak}/>
//             <TabMenuAdmin />
//             <main>
//              <Outlet />
//             </main>
//             </div>
//       );
//     }
//   }
// };

// export default Layout;


import { Outlet } from "react-router-dom";
import "./Layout.css";
import TabMenu from "../listOfUsers/user/TabMenu";
import TabMenuAdmin from "../admin/TabMenuAdmin";
import Navbar from "../listOfUsers/user/navbar";
import NavBarAdmin from "../admin/navbarAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { addUserToDB } from "../../api/UserApiService";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const Layout = (props) => {
  const navigate = useNavigate();
  const { keycloak } = props;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    if (keycloak.authenticated) {
      const token = keycloak.token;
      const decodedToken = keycloak.tokenParsed;
      const resourceAccess = decodedToken.resource_access;
      const role = resourceAccess['front-end-app'].roles[0];

      const fetchUserProfile = async () => {
        try {
          const profile = await keycloak.loadUserProfile();
          const loggedUser = {
            tin: profile.attributes.tin[0],
            firstName: profile.firstName || "",
            surname: profile.lastName || "",
            email: profile.email || "",
            username: profile.username || "",
            role: role
          };

          setUser(loggedUser);
          
          // Adding user to DB if not already stored
          addUserToDB(loggedUser)
            .then((response) => {
              setLoading(false); // Set loading to false after successful API call
              localStorage.setItem('user', JSON.stringify(response.data.data));
            })
            .catch((error) => {
              console.log('Failed to add user to DB:', error);
              setLoading(false); // Set loading to false on error too
            });

        } catch (err) {
          console.error('Failed to load user profile', err);
          setLoading(false); // Set loading to false on error
        }
      };

      fetchUserProfile();
    }
  }, [keycloak.authenticated]); 

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching user profile
  }

  // Assuming stored user in localStorage in addUserToDB response handler
  if (localStorage.getItem('user') !== null) {
    console.log(localStorage.getItem('user'))
    if (user && user.role === "user") {
      return (
        <div className="Layout">
          <Navbar keycloak={keycloak} />
          <TabMenu />
          <main>
            <Outlet />
          </main>
        </div>
      );
    } else if (user && user.role === "admin") {
      return (
        <div className="Layout">
          <NavBarAdmin keycloak={keycloak} />
          <TabMenuAdmin />
          <main>
            <Outlet />
          </main>
        </div>
      );
    } else {
      return null; // Handle the case when user or user role is not determined yet
    }
  }
};

export default Layout;
