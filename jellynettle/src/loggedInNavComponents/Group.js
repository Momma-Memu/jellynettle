import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainNav from './MainNav'
import { getGroupInfo } from '../store/groupInfo';
import GroupFeed from './GroupFeed';

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
                    <div className='groupBanner'>
                        <div className='groupName'>{group.name}</div>
                        <div className='groupDescription'>{group.description}</div>
                        <div className='groupDate'>{`Around Since: ${group.createdAt.slice(0, 10)}`}</div>
                        <div className='memberCount'>{`Total Members: ${group.userCount}`}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="main-background">
            <MainNav />
            {!group ? null : mapGroup(group)}
            <div className="main-background2">
                <div>sidebar</div>
                <div>
                    <GroupFeed groupId={groupId}/>
                </div>
            </div>
        </div>
    )
}


export default Group;