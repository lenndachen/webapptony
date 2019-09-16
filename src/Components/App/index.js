import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Menu from '../Menu';
import Account from '../Account';
import Admin from '../Admin';
import Resources from '../Resources'
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase'
import AuthUserContext from '../Session'
import withAuthentication from '../Session'
import TestDiagnose from '../TestDiagnose';
import TalkAboutYourDay from '../TalkAboutYourDay';

const App = () => (
    <Router>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.OPTIONS} component={PasswordForget} />
      <Route path={ROUTES.TEST_DIAGNOSE} component={TestDiagnose} />
      <Route path={ROUTES.RESOURCES} component={Resources} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      <Route path={ROUTES.MENU} component={Menu} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.ADMIN} component={Admin} />
      <Route path={ROUTES.TALK_ABOUT_DAY} component={TalkAboutYourDay} />
  </Router>
)

export default withAuthentication(App);