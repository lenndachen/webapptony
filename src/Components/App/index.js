import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOutButton from '../SignOut';
import PasswordForgetPage from '../PasswordForget';
import Menu from '../SignedInMenu';
import Account from '../Account';
import Admin from '../Admin';
import Resources from '../Resources'
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase'
import AuthUserContext from '../Session'
import withAuthentication from '../Session'
import TalkAboutYourDay from '../TalkAboutYourDay';
import DiagnosisPage from '../Diagnosispage';
import Navigation from '../Navigation';
import Resourcespage from '../Resources';
import Diagnose from '../Diagnosispage'
import Submitbutton from "../Submittd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
     this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
     
    });
  }

  render() {
    return (
    
    <Router>
    <Navigation authUser={this.state.authUser}/>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.OPTIONS} component={PasswordForgetPage} />
      <Route path={ROUTES.TEST_DIAGNOSE} component={Diagnose} />
      <Route path={ROUTES.RESOURCES} component={Resourcespage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.MENU} component={Menu} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.ADMIN} component={Admin} />
      <Route path={ROUTES.TALK_ABOUT_DAY} component={TalkAboutYourDay} />
      <Route path={ROUTES.DIAGNOSIS_PAGE} component={DiagnosisPage} />
      <Route path={ROUTES.SIGN_OUT} component={SignOutButton} />
      <Route path={ROUTES.SUBMITTD} component={Submitbutton} />
  </Router>
    );
  }
}


export default withFirebase(App);