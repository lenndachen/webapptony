import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../SignUp'
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

// const submitbutton = () => (
//   <div>
//     <h1>Hi User</h1>
//     {/* <p>You scored an amount of {this.props.number}.</p> */}
//     <p>According to the assessement of numbers of 0-10 = No Worries
//     11-25= start talking about it 26-41</p>
//     {/* {SignUpPage this.props.username} */}

//   </div>

  // class submitbutton extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       submitClicked: false
  //     }
  //   }
  //   componentDidMount() {
  //     this.listener = this.props.firebase.auth.onAuthStateChanged(submitClicked => {
  //       submitClicked
  //       ? this.setState({ submitClicked })
  //       : this.setState({ submitClicked: null });
  //       {
  //         3000
  //       }
  //     });
  //   }

  //   render() {
  //     return (
  //       <AuthUserContext.Provider value={this.state.popup}>
  //         {this.state.popup ? <Component {...this.props} user={this.state.popup} /> : null }
  //       </AuthUserContext.Provider>
  //     );
  //   };


import Popup from '../Submittd/popup.js';  


class Submitbutton extends React.Component {  

constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  render() {  
return (  
<div>  
<h1> Simple Popup Example In React Application </h1>  
<button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
{this.state.showPopup ?  
<Popup  
          text='Hello'
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>  

);  
}  
}  

export default withFirebase(Submitbutton);