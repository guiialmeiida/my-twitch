import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "696648351684-7jlq72h55m21683aanth4qklafv6qcda.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(() => setIsSignedIn(auth.isSignedIn.get()));
        });
    });
  }, []);

  const render = () => {
    if (isSignedIn) {
      return (
        <Login
          text="Sign out"
          handleClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        />
      );
    } else if (isSignedIn === null) {
      return <CircularProgress size={30} />;
    } else {
      return (
        <Login
          text="Sign in"
          handleClick={() => window.gapi.auth2.getAuthInstance().signIn()}
        />
      );
    }
  };

  return <>{render()}</>;
};

const Login = ({ text, handleClick }) => (
  <Button variant="contained" color="primary" onClick={handleClick}>
    <i className="google icon" style={{ marginBottom: 13, marginRight: 5 }} />
    {text}
  </Button>
);

export default GoogleAuth;
