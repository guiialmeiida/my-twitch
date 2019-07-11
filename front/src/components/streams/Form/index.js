import React from "react";

//UI
import * as styled from "./streamForm.style";
import { Typography, Button } from "@material-ui/core";

//Redux
import { Field, reduxForm } from "redux-form";

const StreamForm = props => {
  const { handleSubmit, submitForm, headerTitle, buttonText } = props;
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
    console.log(formValues);
    validate(formValues);
    submitForm(formValues);
  };

  return (
    <>
      <styled.form onSubmit={handleSubmit(submit)}>
        <Typography variant="h3">{headerTitle}</Typography>
        <Field name="title" component={renderInput} label="Title" />
        <Field name="description" component={renderInput} label="Description" />
        <styled.buttonWrapper>
          <Button variant="contained" color="primary" type="submit">
            {buttonText}
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
  form: "streamForm",
  validate
})(StreamForm);
