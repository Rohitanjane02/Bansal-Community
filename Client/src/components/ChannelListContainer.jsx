import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png'//todo
import LogoutIcon from '../assets/logout.png'


//!Small sidebar
const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt="Hospital" width='30' />
      </div>
    </div>

    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt="Logout" width='30' />
      </div>
    </div>

  </div>
);


//TODO: add name of the application
//!imp. note about Stram-chat
//we just add this & we will able to display search and channels, stream is not build everything for us 
//it is giving access to api which allow us to search ,channel, create channel, message everything else 
//and we create layout, jsx and style for application

const CompanyHeader = ()=> (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Pager</p>
  </div>
)

//!it contains serchbar, channels & DM
const ChannelListContainer = () => {
  return (
    <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
          <CompanyHeader/>
          <ChannelSearch/>

            {/*stream allow to get the channelList cmpnt But here want to create our custom list, below we have implemented the logic */}
          <ChannelList  
            filters={{}} //The filter() method creates a new array filled with elements that pass a test provided by a function (object to allow filter the messages)
            channelRenderFilterFn = {() => {}} // function we will call we can also pass the filter
            List = {(listProps)=> (// Lists are used to display data in an ordered format and mainly used to display menus on websites.(we want to custom a list)
                <TeamChannelList
                  {...listProps}//we will get all the list within the TeamChannelList that usely get by stream
                  type = 'team'
                />
            )}
            Preview = {(previewProps) => (
              <TeamChannelPreview
                {...previewProps}
                type = 'team' //we have define time bcz we have same for direct messages
              />
            )}
          />

          {/*//! Channel list for direct messages */}
          <ChannelList  
              filters={{}} //The filter() method creates a new array filled with elements that pass a test provided by a function (object to allow filter the messages)
              channelRenderFilterFn = {() => {}} // function we will call we can also pass the filter
              List = {(listProps)=> (// Lists are used to display data in an ordered format and mainly used to display menus on websites.(we want to custom a list)
                  <TeamChannelList
                    {...listProps}//we will get all the list within the TeamChannelList that usely get by stream
                    type = 'messaging'
                  />
            )}
            Preview = {(previewProps) => (
              <TeamChannelPreview
                {...previewProps}
                type = 'messaging' //we have define time bcz we have same for direct messages
              />
            )}
            />
        </div>
    </>
  )
}

export default ChannelListContainer