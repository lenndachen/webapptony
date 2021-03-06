import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import { withRouter } from 'react-router-dom';

const SignUpPage = () => (
  <div className="spacesignup">
  <div className="divsignuppage">
    <h1 className="signupformtitle"><div className="divsignupformtitle">Sign Up Form</div></h1>
    <SignUpForm />
  </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: this.props.username,
        email: this.props.email,
        passwordOne: this.props.passwordOne,
        passwordTwo: this.props.passwordTwo,
        error: null
      }
    }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.RESOURCES);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  } 

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

        const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form className="formsignup" onSubmit={this.onSubmit}>
          <p>Name </p>
          <br />
          <input
          className="usernamesignup"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <p>Email </p>
          <br />
        <input
          className="emailsignup"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br />
        <p>Password </p>
        <br />
        <input
          className="passwordsignup"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br />
        <p>Reenter Password</p>
        <br />
        <input
          className="passwordtwosignup"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <button className="submitsignupbtn" disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

/*const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);*/

const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm};