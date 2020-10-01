import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, addUser } from '../store/findUser';


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

  return (!user) ? null :
   (
    <div className='cardContainer'>
      <div className='profileUserName'>{user.userName}</div>
      <div className='profileGender'>{user.gender}</div>
      <div className='profileDescription'>{user.description}</div>
      <div className='profileJoined'>{`Joined on: ${user.createdAt.slice(0, 10)}`}</div>
      {renderButton ? null : (<div className='addFriend' onClick={handleClick}>{addRequest}</div>) }
    </div>
  );
}
