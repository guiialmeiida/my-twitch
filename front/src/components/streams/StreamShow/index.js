import React, { useEffect } from "react";

//UI
import { Typography } from "@material-ui/core";

//Redux
import { connect } from "react-redux";
import { getStream } from "../../../redux/actions";

const StreamShow = props => {
  const { getStream, match, stream } = props;
  const { id } = match.params;
  useEffect(() => {
    getStream(id);
  }, []);
  if (stream) {
    const { title, description } = stream;
    return (
      <>
        <Typography variant="h4" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {description}
        </Typography>
      </>
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
