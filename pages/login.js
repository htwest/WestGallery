import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projectAuth } from "../firebase/config";

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
      console.log(cred.user);
      router.push("/");
    });
  };

  const handleSignOut = () => {
    projectAuth.signOut().then(() => {
      console.log("USER LOGGED OUT");
    });
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          className="username-login"
          placeholder="EMAIL"
          onChange={handleEmailChange}
        ></input>
        <input
          type="text"
          className="password-login"
          placeholder="PASSWORD"
          onChange={handlePassChange}
        ></input>
        <button type="submit">Sumbit</button>
      </form>
      <div className="sign-out">
        <button className="sign-out-button" onClick={handleSignOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default login;
