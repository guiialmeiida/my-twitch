import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { editStream, getStream } from "../../../redux/actions";

const StreamEdit = props => {
  const { stream, editStream, getStream, match } = props;
  const { id } = match.params;
  useEffect(() => {
    if (!stream) {
      getStream(id);
    }
  }, []);
  if(!stream){
    return <>Loading...</>;
  }

  return (
    <>
      
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editStream, getStream }
)(StreamEdit);
