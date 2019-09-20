import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import writingdown from "../../Assets/picsforlandingpage/writingdown.png";

const Landing = () => (
<div className="row">
  <div>
  </div>
      <div  className="picture-component">
        <ul>
          <li>
              <img className="picture photo4"  src={writingdown} alt="writing hands" />
          </li>
           <Link className="inside-pic-btn" to={ROUTES.SIGN_IN}>Sign In</Link>
           
        </ul>
      </div>
</div>
);

export default Landing;

