import { useEffect } from "react";
import { useRouter } from "next/router";

const login = () => {
  const redirect = () => {
    const router = useRouter();
  };

  return (
    <div>
      <form className="login">
        <h1>Login</h1>
        <input
          type="text"
          className="username-login"
          placeholder="EMAIL"
        ></input>
        <input
          type="text"
          className="password-login"
          placeholder="PASSWORD"
        ></input>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default login;
