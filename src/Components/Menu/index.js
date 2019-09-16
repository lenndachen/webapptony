import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from '../Resources'
import withAuthorization, { AuthUserContext } from '../Session'

import SignOutButton from '../SignOut'

/*class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",

    }
  }
}*/

/*<form onSubmit={this.onSubmit}>
                <input
          name="talkbox"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Talk about what troubles you here."
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>
    </form>*/

const Menu = () => (
  <AuthUserContext.Consumer>
  {authUser => (<div>
    <h1>Test Diagnosis</h1>
    <ul>
      <li>
        <Link to={ROUTES.RESOURCES}>Test Diagnosis</Link>
      </li>
      <li>
        <Link to={ROUTES.RESOURCES}>Resources</Link>
      </li>
    </ul>
    <SignOutButton/>
  </div>)}
  </AuthUserContext.Consumer>
);

export default withAuthorization(Menu);