import React from 'react'

//we willl use these things later on to connect stream chat
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelListContainer, ChannelContainer,Auth } from './components'

import './app.css'

//to setup out chat we need a api key (we will use this to initialize out chat)

const apiKey = '64erc53jd9n2'

//get the instance (for chat work)
const client = StreamChat.getInstance(apiKey);

const authToken = false;

const app = () => {
  if(!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme = 'team light'>
            <ChannelListContainer

            />
            <ChannelContainer

            />
        </Chat>
    </div>
  );
}

export default app