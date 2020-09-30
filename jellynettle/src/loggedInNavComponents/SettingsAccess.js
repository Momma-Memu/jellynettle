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
import { passwordConfirm } from '../store/passwordCheck'
import { useSelector, useDispatch } from 'react-redux';

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
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { id } = useSelector(state => state.authentication)
  const { checkPass } = useSelector(state => state.checkPass)

  const updatePassword = e => setPassword(e.target.value);

  const handleSubmit = () => {
    dispatch(passwordConfirm(id, password))
  }

  return (
    <div>
      <SettingsIcon className={navClass.settings} onClick={handleClickOpen}/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Hold on!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Before you make any changes to your account, please confirm
            who you are!
          </DialogContentText>
                    <TextField className={fieldClasses.root}
                    required id="standard-required"
                    label="Current Password"
                    value={password}
                    onChange={updatePassword}
                    type="password"
                    autoComplete="current-password"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Check Password
          </Button>
          <NavLink exact to="/settings" className="continueBtn">
            <Button onClick={handleClose} disabled={!checkPass} color="primary">
                Continue
            </Button>
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
