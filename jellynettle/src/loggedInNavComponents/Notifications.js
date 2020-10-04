import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import mainNavStyles from '../styles/mainNavStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Slide from '@material-ui/core/Slide';
// import loginFieldStyles from '../styles/loginSignUpStyle';
import { useSelector } from 'react-redux';
// import { getRequestNotifications } from '../store/notifications';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const navClass = mainNavStyles();

  const { id } = useSelector(state => state.authentication);
  const requests = useSelector(state => state.notifications.requests);
  const joinRequests = useSelector(state => state.notifications.joinRequests);


  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = async (e) => {
    const div = e.target;
    const friendId = Number(div.classList[1])

    const hideContainer = e.target.parentNode.parentNode;
    hideContainer.classList.add('hideRequest')

    const res = await fetch('/api/add-remove-friend/acceptRequest', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({userId: id, friendId: friendId })
    });
    const response = await res.json();


    const numOfNotes = document.querySelector('.numNotifications')

    let num = Number(numOfNotes.innerHTML);
    if(num > 1){
      num = num - 1;
      numOfNotes.innerHTML = num
    } else {
      numOfNotes.classList.add('hideNotes')
    }
  }

  const handleDecline = async (e) => {
    const div = e.target;
    const friendId = Number(div.classList[1]);

    const hideContainer = e.target.parentNode.parentNode;
    hideContainer.classList.add('hideRequest')

    const res = await fetch('/api/add-remove-friend/declineRequest', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({userId: id, friendId: friendId})
    });
    const response = await res.json();


    const numOfNotes = document.querySelector('.numNotifications')

    let num = Number(numOfNotes.innerHTML);
    if(num > 1){
      num = num - 1;
      numOfNotes.innerHTML = num
    } else {
      numOfNotes.classList.add('hideNotes')
    }

  }

  const handleJoinAccept = async(e) => {
    const groupId = Number(e.target.classList[1]);
    const userId = Number(e.target.classList[2]);

    const hider = e.target.parentNode.parentNode;
    console.log(hider)
    hider.classList.add('hideRequest')

    const res = await fetch('/api/create-group/acceptJoin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({groupId, userId})
    })

    const numOfNotes = document.querySelector('.numNotifications')

    let num = Number(numOfNotes.innerHTML);
    if(num > 1){
      num = num - 1;
      numOfNotes.innerHTML = num
    } else {
      numOfNotes.classList.add('hideNotes')
    }

  }

  const handleJoinDecline = async(e) => {
    const groupId = Number(e.target.classList[1]);
    const userId = Number(e.target.classList[2]);

    const hider = e.target.parentNode.parentNode;
    console.log(hider)
    hider.classList.add('hideRequest')

    const res = await fetch('/api/create-group/declineJoin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({groupId, userId})
    })

    const numOfNotes = document.querySelector('.numNotifications')

    let num = Number(numOfNotes.innerHTML);
    if(num > 1){
      num = num - 1;
      numOfNotes.innerHTML = num
    } else {
      numOfNotes.classList.add('hideNotes')
    }
  }


  const mapRequests = () => {
    return requests.map(request => {
        return(
        <div className='friendRequestContainer' key={request.id}>
            <p className='requestName'>{`${request.fromUserName}, wants to be your friend.`}</p>
            <div className='choiceDiv'>
                <div className={`acceptBtn ${request.fromUserId}`} onClick={handleAccept}>Accept</div>
                <div className={`declineBtn ${request.fromUserId}`} onClick={handleDecline}>Decline</div>
            </div>
        </div>
        )
    })
  }

  const mapJoinRequests = () => {
    return joinRequests.map(request => {
      return (
        <div className='friendRequestContainer' key={request.id}>
        <p className='requestName'>{`${request.userName}, wants to Join your group, "${request.Group.name}".`}</p>
        <div className='choiceDiv'>
            <div className={`acceptBtn ${request.Group.id} ${request.userId}`} onClick={handleJoinAccept}>Accept</div>
            <div className={`declineBtn ${request.Group.id} ${request.userId}`} onClick={handleJoinDecline}>Decline</div>
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
            Requests:
          </DialogContentText>
            {(!requests) ? null : mapRequests()}
            {(!joinRequests) ? null : mapJoinRequests()}
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
