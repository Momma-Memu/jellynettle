import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import mainNavStyles from '../styles/mainNavStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Slide from '@material-ui/core/Slide';
import loginFieldStyles from '../styles/loginSignUpStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getRequestNotifications } from '../store/notifications';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const navClass = mainNavStyles();

  const { id } = useSelector(state => state.authentication);
  const requests = useSelector(state => state.notifications.requests);


  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
    // dispatch(getRequestNotifications(id))
  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleAccept = () => {

  }

  const handleDecline = () => {

  }

  const mapRequests = () => {
    return requests.map(request => {
        return(
        <div className='friendRequestContainer' key={request.id}>
            <p className='requestName'>{`${request.fromUserName}, wants to be your friend.`}</p>
            <div className='choiceDiv'>
                <div className='acceptBtn' onClick={handleAccept}>Accept</div>
                <div className='declineBtn' onClick={handleDecline}>Decline</div>
            </div>
        </div>
        )
    })
  }

  return (
    <div>
      <NotificationsNoneIcon className={navClass.notifications} onClick={handleClickOpen}/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Notifications"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Friend Requests:
          </DialogContentText>
            {(!requests) ? null : mapRequests()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
