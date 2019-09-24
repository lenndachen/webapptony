import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import writingdown from "../../Assets/picsforlandingpage/writingdown.png";
import SignInPage from "../SignIn";
import { SignInForm } from "../SignIn";

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

  render() {
    
    return (<div className="row">
    
        <div  className="picture-component">
            <div>
              <img className="picture photo4"  src={writingdown} alt="writing hands" />
            </div>
          
            <div className="signinpopup">
                <button className="inside-pic-signin" onClick={this.toggleSignInPopup}>Sign In</button>
            </div>
            <div className="">
          {this.state.signInOpen && 
            <div className="signin-modal" >
               <SignInForm 
                email='' 
                password='' 
                error={null}
                />
              <div className="padding-button">
              <button className="cancelbutton" onClick={this.toggleSignInPopup} >Cancel</button>   
              </div>   
            </div>}
        </div>
      </div>
    </div>
    ) 
};
}

export default Landing;

