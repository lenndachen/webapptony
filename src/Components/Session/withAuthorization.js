import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import AuthUserContext from './context'

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (authUser === null) {
            this.props.history.push(ROUTES.LANDING);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();

    }
    render() {
      return (
        <AuthUserContext.Consumer>
        {authUser =>
          authUser !== null ? <Component {...this.props} /> : null
        }
      </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;