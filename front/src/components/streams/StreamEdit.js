import React, { useEffect } from "react";
import StreamForm from "./Form";

//Redux
import { connect } from "react-redux";
import { editStream, getStream } from "../../redux/actions";

const StreamEdit = props => {
  const { stream, editStream, getStream, match } = props;
  const { id } = match.params;
  useEffect(() => {
    if (!stream) {
      getStream(id);
    }
  }, []);

  const onSubmit = formValues => {
    const { title, description } = formValues;
    editStream(id, { title, description });
  };

  if (stream) {
    const { title, description } = stream;
    return (
      <StreamForm
        initialValues={{ title, description }}
        submitForm={onSubmit}
        headerTitle="Edit Stream"
        buttonText="edit"
      />
    );
  }

  return <></>;
};

//ownProps são as props do componente StreamEdit
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editStream, getStream }
)(StreamEdit);
