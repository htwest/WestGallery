import { useEffect } from "react";
import { useRouter } from "next/router";

const login = () => {
  const redirect = () => {
    const router = useRouter();
  };

  return (
    <div>
      <form>
        <h1>Login</h1>
        <input type="text" className="username-login"></input>
        <input type="text" className="password-login"></input>
        <buttong type="submit">Sumbit</buttong>
      </form>
    </div>
  );
};

export default login;
