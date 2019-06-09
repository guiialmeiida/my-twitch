import React from "react";
import { Paper, Link } from "@material-ui/core";
import { VideoLabel } from '@material-ui/icons'
import { Link as RouterLink } from "react-router-dom";

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
        <Link component={RouterLink} to="/" style={{ marginRight: 30 }}>
          All Streams
        </Link>
        <Link component={RouterLink} to="/">
          Login
        </Link>
      </div>
    </Paper>
  );
};

export default Header;
