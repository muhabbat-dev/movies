import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { movieApi } from "../constants/axios";
import { userRequests } from "../constants/requests";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const togglePassword = (event) => {
    event.preventDefault();

    console.log(showPass);
    setShowPass(!showPass);
  };

  const authentication = () => {
    // call API
    if (!email || !password) {
      setMessage("missing credentials");
    } else {
      movieApi
        .post(userRequests.login, {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          // go to home page
        })
        .catch((error) => {
          console.log(error);
          // setMessage
        });
    }
  };
  return (
    <>
      <label className="email">Email</label>
      <input
        type="email"
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
      <button className="submit" onClick={authentication}>
        submit
      </button>
      <span className="form-message">{message}</span>
    </>
  );
};

export default LoginForm;
