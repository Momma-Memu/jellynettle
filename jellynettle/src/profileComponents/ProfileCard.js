import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, addUser } from '../store/findUser';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


export default function ProfileCard({params}) {
  const userProfileId = params.id

  const { id } = useSelector(state => state.authentication)
  const user = useSelector(state => state.findUser).user
  const friends = useSelector(state => state.findUser).friends || [];

  const isMe = id === Number(userProfileId);
  let isFriend = false;

  if(!isMe){
    for(let i = 0; i < friends.length; i++){
      const friend = friends[i].friendId
      if(id === friend){
        isFriend = true;
        break;
      }
    }
  }

  const renderButton = isMe || isFriend;

  let isNullDescription;

  if(user){
    if(user.description){
      isNullDescription = true;
    }
  }

  const renderDescriptionUpdater = !isNullDescription && isMe;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userProfileId))
  }, [userProfileId]);

  const handleClick = () => {
    // handleClickOpen();
    setAddRequest('Requested')
    dispatch(addUser(id, Number(userProfileId)));
  }

  const [addRequest, setAddRequest] = useState('Add Friend')
  const [description, setDescription] = useState('');
  const updateDescription = e => setDescription(e.target.value);

  const handleAddDesc = async() => {
    const res = await fetch('/api/update-user/description', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id, description})
    });
    const response = await res.json();
    // setDescription('');
    const descriptionUpdater = document.querySelector('.descripTextField')
    descriptionUpdater.classList.add('tempHide')

    const newDescrip = document.querySelector('.newDescripHidden')
    newDescrip.classList.add('newDescripShown')
    newDescrip.classList.remove('newDescripHidden')
    newDescrip.innerHTML = description;

    const oldDescrip = document.querySelector('.profileDescription')
    oldDescrip.classList.add('tempHide')
  }

  const handleEdit = () => {
    const editor = document.querySelector('.descripTextField')
    if(!editor.classList.contains('tempHide')){
      const hideEditor = document.querySelector('.descripTextField');
      hideEditor.classList.add('tempHide')
    } else {
      editor.classList.remove('tempHide');
    }

    const oldDescrip = document.querySelector('.profileDescription')
    if(oldDescrip.classList.contains('tempHide')){
      oldDescrip.classList.remove('tempHide')
    }

    const oldDescripReset = oldDescrip.innerHTML
    if(description === ''){
      oldDescrip.innerHTML = oldDescripReset;
    } else {
      oldDescrip.classList.add('tempHide')
      // oldDescrip.classList.remove('newDescripShown')
    }
  }

  return (!user) ? null :
   (
    <div className='cardContainer'>
      <div className='userNameContainer'>
        <div className='profileUserName'>{user.userName}</div>
        {!isMe? null :
          <Tooltip title='Edit Profile'>
            <EditIcon className='editProfile' onClick={handleEdit}/>
          </Tooltip>}
      </div>
      <div className='profileGender'>{user.gender}</div>
      <div className='profileDescription'>{user.description}</div>
      {!isMe ? null :
        (<div className='descripTextField tempHide'><TextField id="standard-basic"
        onChange={updateDescription} label="Edit description"/>
        <SendIcon onClick={handleAddDesc} className='submitDescrip'/></div>)}
      <p className='newDescripHidden'>{description}</p>
      <div className='profileJoined'>{`Joined on: ${user.createdAt.slice(0, 10)}`}</div>
      {renderButton ? null : (<div className='addFriend' onClick={handleClick}>{addRequest}</div>) }
    </div>
  );
}
