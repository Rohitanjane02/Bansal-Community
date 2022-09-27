import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'//it will give the avatar 

//!it will going to same as ChannelListContainer
const TeamChannelPreview = ({channel, type}) => {
  const{ channel: activeChannel, client }= useChatContext();

  // ChannelPreview for channel with multiple users
  const ChannelPreview = () =>{
    <p className='channel-preview__item'>
      {/*we want channel name but here, ? -> use to make sure we have the channel before we want the data */}
      {/* || if channel does not have any name */}
      # {channel?.data?.name || channel?.data?.id}
    </p>
  }

  //!members higher level structure
  /*{{}, {}} [key, value]
  {
    '123': {},
    '1234': {},
    '1223': {},
    '1789': {}
  }
  */

  // Preview for direct messeges
  const DirectPreview = () => {
    // that will give the value of specific object
    //filer() -> filter method create a new array filled with elements that pass a test providedby a function
    //basically we throwing ourself outside the chat so we can get the actual user we taking to
    const members = Object.values(channel.state.members).filter(({ user }) => user.id != client.userID);
    return(
      <div className='channel-preview__item single'>
        <Avatar
        // ? bcz we always need to know the user is exist or not
          image = {members[0]?.user?.image}
          name = {members[0]?.user?.fullName}
          size = {24}
        />

        //here i will list the member names
      </div>
      
    )
  }

  return (
    //! this div is going to have different class name depending on if the current chat is selected or not 
    <div className={
      channel?.id === activeChannel?.id
        ? 'channel-preview_wrapper_selected'
        : "channel-preview__wrapper" 
    }
    onClick= {() => {
      console.log(channel);
    }}
    >
      {type === 'team' ? <ChannelPreview /> : <DirectPreview/>}
    </div>
  )
}

export default TeamChannelPreview