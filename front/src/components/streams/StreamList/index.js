import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { getStreams } from "../../../redux/actions";

//UI
import * as styled from "./streamList.style";
import { Typography, Button } from "@material-ui/core";
import { Laptop } from "@material-ui/icons";

const StreamList = props => {
  const { getStreams, streams, currentUserId, isSignedIn } = props;
  useEffect(() => {
    getStreams();
  }, []);

  const handleButtons = i => {
    if (streams[i].userId === currentUserId) {
      return (
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 5 }}
            component={Link}
            to={`/streams/edit/${streams[i].id}`}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={`/streams/delete/${streams[i].id}`}
          >
            Delete
          </Button>
        </div>
      );
    }
  };

  const renderStreams = () => {
    return streams.map(({ id, title, description }, index) => {
      return (
        <styled.Paper key={id}>
          <styled.Info>
            <Laptop color="primary" fontSize="large" />
            <div style={{ marginLeft: "1vw" }}>
              <Link to={`/stream/${id}`} className="title">
                <Typography variant="h4" color="textPrimary">
                  {title}
                </Typography>
              </Link>
              <Typography variant="inherit" color="textPrimary">
                {description}
              </Typography>
            </div>
          </styled.Info>
          {handleButtons(index)}
        </styled.Paper>
      );
    });
  };

  return (
    <styled.Wrapper>
      <Typography variant="h3" color="textPrimary">
        Streams
      </Typography>
      <styled.List>
        {renderStreams()}
        {isSignedIn ? (
          <Button
            variant="contained"
            color="primary"
            style={{ alignSelf: "flex-end", marginTop: 5, marginRight: 10 }}
            component={Link}
            to="/streams/new"
          >
            Create Stream
          </Button>
        ) : null}
      </styled.List>
    </styled.Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
