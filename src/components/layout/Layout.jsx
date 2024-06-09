import { Outlet } from "react-router-dom";
import "./Layout.css";
import TabMenu from "../listOfUsers/user/TabMenu";
import TabMenuAdmin from "../admin/TabMenuAdmin";
import Navbar from "../listOfUsers/user/navbar";
import NavBarAdmin from "../admin/navbarAdmin"
import { useNavigate } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { addUserToDB } from "../../api/UserApiService";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const Layout = (props) => {
  const navigate = useNavigate();
  const { keycloak } = props;
  const [user, setUser] = useState(null);

  let role = null;
  const loadUserProfile = async (keycloak) => {
    if (keycloak && keycloak.authenticated) {
      try {
        const profile = await keycloak.loadUserProfile();
        return {
            tin: profile.attributes?.tin ? profile.attributes.tin[0] : "",
            firstName: profile.firstName || "",
            surname: profile.lastName || "",
            email: profile.email || "",
            username: profile.username || "",
            role: role
};
      } catch (err) {
        console.error('Failed to load user profile', err);
        throw err;
      }
    }
    throw new Error('Keycloak is not authenticated');
  };

  if (keycloak.authenticated) {
    const token = keycloak.token;

  // Decode the token to extract user information
    const decodedToken = keycloak.tokenParsed;

  // Extract user roles from the decoded token
    const resourceAccess = decodedToken.resource_access;

    role = resourceAccess['front-end-app'].roles[0];
 }
    loadUserProfile(keycloak)
    .then((loggedUser) => {
        if(user === null){
            addUserToDB(loggedUser)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data.data));
            })
        }
    })
    .catch((error) => {
        console.log(error);
    });

  if (localStorage.getItem('user') !== null) {
    if (role === "user") {
      return (
            <div className="Layout">
            <Navbar keycloak = {keycloak}/>
            <TabMenu />
            <main>
          
                <Outlet />
            </main>
            </div>
        );
        }else if(role === "admin"){
        return (
            <div className="Layout">
             <NavBarAdmin keycloak = {keycloak}/>
            <TabMenuAdmin />
            <main>
             <Outlet />
            </main>
            </div>
      );
    }
  }
};

export default Layout;
