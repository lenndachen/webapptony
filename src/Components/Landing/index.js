import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import writingdown from "../../Assets/picsforlandingpage/writingdown.png";
import SignInPage from "../SignIn";
import { SignInForm } from "../SignIn";
import SignUpPage from "../SignUp";

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class Landing extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      signInOpen: false
    }
  }
  toggleSignInPopup = () => {
    this.setState({  
      signInOpen: !this.state.signInOpen 
 });  
  }

  toggleSignUpreRoute = () => {
    this.setState({  
      signUpreRoute: !this.state.signUpreRoute
 });  
  }

  render() {
    
    return (<div className="row">
    
        <div  className="picture-component">
            <div>
              <img className="picture photo4"  src={writingdown} alt="writing hands" />
            </div>
          
            <div className="signinpopup">
                <button className="inside-pic-signin" onClick={this.toggleSignInPopup}>Sign In</button>
            </div>
            <div className="inside-popupbox">
          {this.state.signInOpen && 
            <div className="signin-modal" >
               <SignInForm 
                email='' 
                password='' 
                error={null}
                />
              <div className="padding-button">
              <div className="signup-linkpopup" ><Link className="link-to-sign-up" to={ROUTES.SIGN_UP}>Sign Up</Link></div>
              <div className="forgotpassword-linkpopup"> <Link className="linktoforgotpassword" to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link></div>
              <button className="cancelbutton" onClick={this.toggleSignInPopup}>Cancel</button>   
              </div>   
            </div>}
        </div>
      </div>
    </div>
    ) 
};
}

export default Landing;

