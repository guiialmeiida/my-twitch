import React from "react";
import StreamForm from "./Form";

//Redux
import { connect } from "react-redux";
import { createStream } from "../../redux/actions";

const StreamCreate = props => {
  const { createStream } = props;
  return (
    <StreamForm
      submitForm={createStream}
      headerTitle="Create Stream"
      buttonText="create"
    />
  );
};

export default connect(
  null,
  { createStream }
)(StreamCreate);
