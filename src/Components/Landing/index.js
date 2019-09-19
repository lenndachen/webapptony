import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import females from '../../Assets/picsforlandingpage/females.jpg'
import handgestures from "../../Assets/picsforlandingpage/handgestures.jpg"
import talking from "../../Assets/picsforlandingpage/talking.jpg";
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
              <button> <Link className="inside-pic-btn" to={ROUTES.SIGN_IN}>Sign In</Link> </button>
        </ul>
      </div>
</div>
);

export default Landing;

