import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {
  return (
    <>
      <h1>Signup PAGE</h1>
      <ul>
        <li>Read the User Model, You can change it to fit your needs</li>
        <li>
          Make sure you read the Signup up func in the User Controller, to know
          how it is setup to find the user!
        </li>
      </ul>
    </>
  );
}
