import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo1 from '../../Assets/logos/logo1.PNG'
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";

const Navigation = ({ authUser }) => {
  console.log(authUser);
  return (
    <div>
    { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
</div>
  )
}


  const NavigationAuth = () => (
  <div className="navbar">

    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt="logo"/></Link>
    </div>

    <ul className="links-component">
      <li>
        <Link className="link-buttons" to={ROUTES.MENU}>Menu TEST</Link>
      </li>
        <li>
            <Link to={ROUTES.ADMIN} className="link-buttons hidden-admin">Admin</Link>
        </li>
        <li>
       <SignOutButton />
        </li>
      </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navnonauth-wrapper">
    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt=""></img></Link>
    </div>
    <div className="links-nonauthalltogether">
      <ul className="ul-nonauth">
        <li>
             <Link className="links-containernonauth signupnonauth" to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li> 
            <Link className="links-containernonauth passwordnonauth" to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
            
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;