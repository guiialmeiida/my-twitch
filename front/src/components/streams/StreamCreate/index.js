import React from "react";

//UI
import * as styled from "./streamCreate.style";
import { Typography, Button } from "@material-ui/core";

//Redux
import { Field, reduxForm } from "redux-form";

const StreamCreate = ({ handleSubmit }) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return <Typography color="error">{error}</Typography>;
    }
  };

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
        {renderError(meta)}
      </>
    );
  };

  return (
    <>
      <styled.form onSubmit={handleSubmit(validate)}>
        <Typography variant="h3">Create Stream</Typography>
        <Field name="title" component={renderInput} label="Title" />
        <Field name="description" component={renderInput} label="Description" />
        <styled.buttonWrapper>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
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

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
