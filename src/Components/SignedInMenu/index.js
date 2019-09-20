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

const SignedInMenu = () => (
  <div>
  <ul className="menu-content-list">
    <li>
      <Link className="menu-content" to={ROUTES.TEST_DIAGNOSE}>Test Diagnosis</Link>
    </li>
    <li>
      <Link className="menu-content" to={ROUTES.TALK_ABOUT_DAY}>Talk about your day</Link>
    </li>
    <li>
      <Link className="menu-content resources-list" to={ROUTES.RESOURCES}>Resources</Link>
    </li>
  </ul>
</div>
);


export default withAuthorization(SignedInMenu);