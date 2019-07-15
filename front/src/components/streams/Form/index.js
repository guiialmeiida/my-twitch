import React from "react";

//UI
import * as styled from "./streamForm.style";
import { Typography, Button } from "@material-ui/core";

//Redux
import { Field, reduxForm } from "redux-form";

const StreamForm = props => {
  const { handleSubmit, submitForm, headerTitle, buttonText } = props;

  const submit = formValues => {
    validate(formValues);
    submitForm(formValues);
  };

  return (
    <>
      <styled.form onSubmit={handleSubmit(submit)}>
        <Typography variant="h3" color="textPrimary">
          {headerTitle}
        </Typography>
        <Field name="title" component={renderInput} label="Title"/>
        <Field name="description" component={renderInput} label="Description" />
        <styled.buttonWrapper>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button"
          >
            {buttonText}
          </Button>
        </styled.buttonWrapper>
      </styled.form>
    </>
  );
};

const renderInput = props => {
  const { input, label, meta } = props;
  const { error, touched } = meta;
  return (
    <>
      <label style={{ width: "50%" }}>
        <Typography variant="h6" color="textPrimary">
          {label}
        </Typography>
        <styled.TextField
          error={!!error && touched}
          variant="outlined"
          autoComplete="off"
          {...input}
        />
      </label>
      {!!error && touched ? <Typography color="error">{error}</Typography> : ""}
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
  form: "streamForm",
  validate
})(StreamForm);
