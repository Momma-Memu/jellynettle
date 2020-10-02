import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainNav from './MainNav'
import { getGroupInfo } from '../store/groupInfo';

const Group = (props) => {
    const groupId = Number(props.match.params.id);
    const group = useSelector(state => state.group);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroupInfo(groupId))
    }, []);

    const mapGroup = (groupArray) => {
        return groupArray.map(group => {
            return (
                <div className='groupContainer'>
                    <div className='groupName'>{group.name}</div>
                    <div className='groupDate'>{`Around Since: ${group.createdAt.slice(0, 10)}`}</div>
                </div>
            )
        })
    }

    return (
        <div>
            <MainNav />
            {!group ? null : mapGroup(group)}
        </div>
    )
}


export default Group;