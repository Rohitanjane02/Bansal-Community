import React, { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'//here we use cotext from stream-chat application

import { SearchIcon } from '../assets'

const ChannelSearch = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    //async:The word “async” before a function means one simple thing: a function always returns a promise.(bcz we have to waite the function to fetch the channels)
    //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    //accept text for searching
    const getChannels  = async (text) => {
        try {
            //TODO: fetch channels
        } catch (error) {
            setQuery('')
        }
    }


    const onSearch = (event) => {
        //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        //For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
        event.preventDefault();

        //search query: event.target.value
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }

    return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon />
            </div>
            <input 
                className='channel-search__input__text' 
                placeholder='Search'
                type= 'text' 
                value={query}
                onChange = {onSearch}   
            />
        </div>
    </div>
  )
}

export default ChannelSearch