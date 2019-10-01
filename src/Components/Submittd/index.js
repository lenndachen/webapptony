import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignUpPage from "../SignUp";

const submitbutton = () => (
  <div>
    <h1>Hi User</h1>
    {/* <p>You scored an amount of {this.props.number}.</p> */}
    <p>
      According to the assessement of numbers of 0-10 = No Worries 11-25= start
      talking about it 26-41
    </p>
    {/* {SignUpPage this.props.username} */}
  </div>
);

export default submitbutton;
