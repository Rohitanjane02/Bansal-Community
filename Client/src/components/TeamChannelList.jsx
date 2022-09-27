import React from 'react'

import { AddChannel } from '../assets'

//* props.children: is a spcial children, It contains content b/w opening & closing tags of component
//!here this component got the all the list
//type: here type is going to depenent are we in grp chat or in just direct msgs
const TeamChannelList = ({ children, error = false, loading, type}) => {

    if(error) {
        return type === 'team'? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    connection error, please wait a moment and try again.
                </p>
            </div>
        ): null;
    }

    if(loading) {
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading' >
                    {/* dynamic block */}
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    //!After handeling error & loading we can show the list 
  return (
    <div className='team-channel-list'>
        <div className='team-channel-list__header'>
            <p className='team-channel-list__header__title'>
            {type === 'team' ? 'Channels' : 'Direct Messages'} 
            </p>
            {/* button - add channel */}
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList