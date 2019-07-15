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
  const { modal, toggleModal, modalProps } = props;
  const { title, text, buttonText, onDismiss, onConfirm } = modalProps;
  useEffect(() => {
    toggleModal(true);
  }, []);

  const modalChange = modalValue => {
    toggleModal(modalValue);
    onDismiss();
  };

  return (
    <MUIModal open={modal} onBackdropClick={() => modalChange(false)}>
      <styled.Paper>
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ paddingLeft: 10 }}
        >
          {title}
        </Typography>
        <Divider />
        <div style={{ height: "80%", paddingLeft: 10 }}>
          <Typography variant="h5" color="textPrimary">
            {text}
          </Typography>
        </div>
        <Divider />
        <div style={{ alignSelf: "flex-end", margin: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onConfirm}
            className="button"
          >
            {buttonText}
          </Button>
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={() => modalChange(false)}
            style={{ marginLeft: 5 }}
          >
            cancel
          </Button>
        </div>
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
