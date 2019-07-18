import React, { useEffect } from "react";
import history from "../../history";

import Modal from "../modal";

//Redux
import { connect } from "react-redux";
import { getStream, deleteStream } from "../../redux/actions";

const StreamDelete = props => {
  const { getStream, deleteStream, stream, match } = props;

  useEffect(() => {
    getStream(match.params.id);
  }, []);

  let modalProps = {
    text: `Are you sure you want to delete the stream "${
      stream ? stream.title : ""
    }"?`,
    title: "Delete Stream",
    buttonText: "delete",
    onDismiss: () => {
      history.push("/");
    },
    onConfirm: () => {
      deleteStream(stream.id);
      history.push("/");
    }
  };

  return <Modal modalProps={modalProps} />;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getStream, deleteStream }
)(StreamDelete);
