import React from "react";
import { Link as RouterLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

import { Paper, Link } from "@material-ui/core";
import { VideoLabel } from "@material-ui/icons";

const Header = () => {
  return (
    <Paper
      style={{
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ marginLeft: 20 }}>
        <Link component={RouterLink} to="/">
          <VideoLabel />
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <Link
          component={RouterLink}
          to="/"
          style={{ marginRight: 30 }}
        >
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </Paper>
  );
};

export default Header;
