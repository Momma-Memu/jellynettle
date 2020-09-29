import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import mainNavStyles from '../styles/mainNavStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { NavLink } from 'react-router-dom';
import loginFieldStyles from '../styles/loginSignUpStyle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navClass = mainNavStyles();
  const fieldClasses = loginFieldStyles();

  return (
    <div>
        <p className="paragraphs3" onClick={handleClickOpen}>By signing up, you are agreeing
        to our community standards. Click here to have a read of them.</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Our community standards:
          </DialogContentText>
            <p>1.) I understand that if I use hate speech of any kind,
            I may be remove from the platform.</p>
            <p>2.) I understand that hate speech includes, but is not limited to,
            ableism, sexism, racism, anti-lgbt rhetoric, xenophobia, Holocaust denial,
            ethnic intolerance, ethnic slur, ethnic joke, gay bashing, threats of violence,
            threats in general, fat shaming.</p>
            <p>3.) I promise to do my best to create a welcoming environment for everyone.</p>

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                I understand
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
