import Button from "../Button/Button";
import "./Login.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({
      name: "Furry Pal",
      password:"1234"
    });
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return (
    <>
      <span>user is currently {isLoggedIn ? "logged in" : "logged out"}.</span>
      <br/>
      {isLoggedIn ? <span> Username: {authUser.name}</span> : null}
      {isLoggedIn ? <span> Password: {authUser.password}</span> : null}

      {isLoggedIn ? (
        <button
          onClick={(e) => {
            logOut(e);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={(e) => {
            logIn(e);
          }}
        >
          Login
        </button>
      )}
    </>
  );
}
