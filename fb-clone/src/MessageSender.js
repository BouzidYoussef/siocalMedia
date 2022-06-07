import { Avatar } from '@material-ui/core';
import React from 'react';
import "./MessageSender.css";

function MessageSender() {
  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
        
        </div>
        <div className='messageSender__bottom'>
        <Avatar />
        <form>
            <input 
                className='messageSender__input'
                placeholder={"Mettre a jour"} />
        </form>
        </div>
    </div>
  )
}

export default MessageSender