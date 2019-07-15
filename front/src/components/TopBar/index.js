import React from "react";
import { Link as RouterLink } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

//UI
import * as styled from "./topBar.style";
import { Link } from "@material-ui/core";
import { VideoLibrary } from "@material-ui/icons";

const TopBar = () => {
  return (
    <styled.Paper>
      <div style={{ marginLeft: 20 }}>
        <Link component={RouterLink} to="/">
          <VideoLibrary />
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <Link component={RouterLink} to="/" style={{ marginRight: 30 }}>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </styled.Paper>
  );
};

export default TopBar;
