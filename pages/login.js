import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../comps/Auth";
import { useRouter } from "next/router";

const login = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(currentUser);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("works");
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
    </div>
  );
};

export default login;
