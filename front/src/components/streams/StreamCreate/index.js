import React from "react";

//UI
import * as styled from "./streamCreate.style";
import { Typography, Button } from "@material-ui/core";

//Redux
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../../redux/actions";

const StreamCreate = ({ handleSubmit, createStream }) => {
  const renderInput = ({ input, label, meta }) => {
    const { error, touched } = meta;
    return (
      <>
        <label style={{ width: "50%" }}>
          <Typography variant="h6">{label}</Typography>
          <styled.TextField
            error={!!error && touched}
            variant="outlined"
            {...input}
            autoComplete="off"
          />
        </label>
        {!!error && touched ? (
          <Typography color="error">{error}</Typography>
        ) : (
          ""
        )}
      </>
    );
  };
  
  const submit = formValues => {
    validate(formValues);
    createStream(formValues);
  };

  return (
    <>
      <styled.form onSubmit={handleSubmit(submit)}>
        <Typography variant="h3">Create Stream</Typography>
        <Field name="title" component={renderInput} label="Title" />
        <Field name="description" component={renderInput} label="Description" />
        <styled.buttonWrapper>
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
        </styled.buttonWrapper>
      </styled.form>
    </>
  );
};

const validate = ({ title }) => {
  let errors = {};
  if (!title) {
    errors.title = "The stream must have a title";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
