import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projectAuth } from "../firebase/config";

import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import styles from "../styles/Login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    projectAuth.signInWithEmailAndPassword(email, password).then((cred) => {
      // console.log(cred.user);
      router.push("/");
    });
  };

  const handleSignOut = () => {
    projectAuth.signOut().then(() => {
      // console.log("USER LOGGED OUT");
      router.push("/");
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Form className="login row mt-5" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Form.Group className="col-xs-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="col-xs-4 mb-5">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassChange}
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <div className={styles.signOut}>
          <Button variant="secondary" onClick={handleSignOut}>
            SIGN OUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default login;
