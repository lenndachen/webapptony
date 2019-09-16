import React from 'react';
import withAuthorization, { AuthUserContext } from '../Session'

const Resources = () => (
  <div>
    <h1>This is the Resources page.</h1>
  </div>
);

//const condition = authUser => !!authUser;

export default withAuthorization(Resources);
