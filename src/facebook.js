import { useState } from "react";
import LoginForm from "./Login";

const adminUser = {
  firstName: "Felix",
  lastName: "Miranda",
};
const Entry = () => {
  const [showUser, setShowUser] = useState(false);
  const [error, setError] = useState("");

  const Login = (person) => {
    console.log(person);
    if (
      person.name === adminUser.firstName &&
      person.lastName === adminUser.lastName
    ) {
      setShowUser(true);
      console.log("Logged in");
    } else {
      console.log("Inputs does not match");
      setShowUser(false);
      setError("error");
    }
  };

  const Logout = () => {
    setShowUser(false);
    setError("");
  };

  return (
    <main>
      {showUser ? (
        <>
          <div className="language-container">
            <h1 className="welcome-title">Welcome {adminUser.firstName}</h1>
            <img
              src="https://qph.fs.quoracdn.net/main-qimg-446a4c6248eaa7c3b8e83ba3131d0948"
              alt=""
            />
            <button className="account-btn" onClick={Logout}>
              Logout
            </button>{" "}
          </div>
        </>
      ) : (
        <div className="container-face">
          <div className="content">
            <div className="title-container">
              <div className="title-container__inside">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  alt="facebook"
                />
                <h2>
                  Facebook te ayuda a comunicarte y compartir con las personas
                  que forman parte de tu vida.
                </h2>
              </div>
            </div>
            <LoginForm Login={Login} error={error} />
          </div>
        </div>
      )}
    </main>
  );
};
export default Entry;
