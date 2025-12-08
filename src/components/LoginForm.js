import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const togglePassword = (event) => {
    event.preventDefault();

    console.log(showPass)
    setShowPass(!showPass);
  };
  return (
    <>
      <label className="email">Email</label>
      <input
        type="text"
        className="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label className="password">Password</label>
      <input
        type={showPass ? "text" : "password"}
        className="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <span onClick={(e) => togglePassword(e)}>
        <span>
          {showPass ? (
            <FontAwesomeIcon icon={faEye} className="customIcon" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
          )}
        </span>
      </span>
    </>
  );
};

export default LoginForm;
