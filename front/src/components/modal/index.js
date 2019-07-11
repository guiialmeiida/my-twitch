import React, { useEffect } from "react";

//UI
import {
  Modal as MUIModal,
  Typography,
  Divider,
  Button
} from "@material-ui/core";
import * as styled from "./modal.style";

//Redux
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions";

const Modal = props => {
  const { text, buttonText, modal, toggleModal } = props;
  useEffect(() => {
      toggleModal(true)
  })
  return (
    <MUIModal open={modal} onBackdropClick={() => toggleModal(false)}>
      <styled.Paper>
        <Typography>{text}</Typography>
        <Divider />
        <Button variant="contained" color="primary" onClick={toggleModal(false)}>
          cancel
        </Button>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </styled.Paper>
    </MUIModal>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.app.modal
  };
};

export default connect(
  mapStateToProps,
  { toggleModal }
)(Modal);
