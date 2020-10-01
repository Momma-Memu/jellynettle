import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../store/findUser';

export default function RecipeReviewCard(props) {
  // const classes = profileCardStyles();
  const userId = props.props.id
  console.log(userId)

  const { id } = useSelector(state => state.authentication)
  const user = useSelector(state => state.findUser).user

  const [uid, setUid] = useState('')

  const who = id === Number(userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId))
}, []);

  return (!user) ? null :
   (
    <div className='cardContainer'>
      <div className='profileUserName'>{user.userName}</div>
      <div className='profileGender'>{user.gender}</div>
      <div className='profileDescription'>{user.description}</div>
      <div className='profileJoined'>{`Joined on: ${user.createdAt.slice(0, 10)}`}</div>
      {who ? null : (<div className='addFriend'>Add Friend</div>) }
    </div>
  );
}
