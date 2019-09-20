import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo1 from '../../Assets/logos/logo1.PNG'
import SignOutButton from '../SignOut'

const Navigation = ({authUser}) => {
  console.log('user', authUser)
return (
  <div> {!authUser ? <NavigationAuth /> : <NavigationNonAuth />} </div> 
  )
}

  const NavigationAuth = () => (
  <nav className="navbar">
    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt="logo"/></Link>
    </div>
    <ul className="links-component">
      <li>
        <Link className="link-buttons" to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>

    </ul>

  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar">
    <div className="logo-wrapper">
    <Link to={ROUTES.LANDING}><img src={logo1} alt=""></img></Link></div>
    <ul className="links-component">
      <div className="signoutbutton">
      <Link to={ROUTES.LANDING}>Sign Out</Link>
      </div>
    </ul>
  </nav>
)

export default Navigation;