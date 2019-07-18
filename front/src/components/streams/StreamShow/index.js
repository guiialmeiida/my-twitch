import React, { useEffect } from "react";

//UI
import { Typography } from "@material-ui/core";

//Redux
import { connect } from "react-redux";
import { getStream } from "../../../redux/actions";

//Streaming
import flv from "flv.js";

const StreamShow = props => {
  const videoRef = React.createRef();
  const { getStream, match, stream } = props;
  const { id } = match.params;

  useEffect(() => {
    getStream(id);
  }, []);

  useEffect(() => {
    if (stream) {
      const player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`
      });
      player.attachMediaElement(videoRef.current);
      player.load();
      //tipo um componentWillUnmount
      return function cleanUp() {
        player.destroy();
      };
    } else {
      return;
    }
  }, [stream]);

  if (stream) {
    const { title, description } = stream;
    return (
      <div style={{ width: "70%", margin: "25px 15%" }}>
        <video ref={videoRef} style={{ width: "100%" }} controls />
        <Typography variant="h4" className="title">
          {title}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {description}
        </Typography>
      </div>
    );
  }

  return <></>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getStream }
)(StreamShow);
