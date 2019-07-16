import React, { useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";

//REDUX
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/actions";

const GoogleAuth = ({ signIn, signOut, ...props }) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "696648351684-7jlq72h55m21683aanth4qklafv6qcda.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance().isSignedIn;
          onAuthChange(auth.get());
          auth.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = isSignedIn => {
    let userId = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getId();
    isSignedIn ? signIn(userId) : signOut();
  };

  const render = () => {
    if (props.isSignedIn) {
      return (
        <Login
          text="Sign out"
          handleClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        />
      );
    } else if (props.isSignedIn === null) {
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
  <Button
    variant="contained"
    color="secondary"
    onClick={handleClick}
  >
    <i className="google icon" style={{ marginBottom: "1vh", marginRight: 5 }} />
    {text}
  </Button>
);

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
