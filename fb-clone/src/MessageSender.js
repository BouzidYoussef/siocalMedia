import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";

function MessageSender() {
    const [input, setInput] = useState('')

    const handleSubmit= e =>{
      e.preventDefault();
    }
  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
        
        </div>
        <div className='messageSender__bottom'>
        <Avatar />
        <form>
            <input 
                value={input}
                onChange={e =>setInput(e.target.value) }
                className='messageSender__input'
                placeholder={"Mettre a jour"} />
                <button onClick={handleSubmit} type="submit">
                  Hidden submit
                </button>
        </form>
        </div>
    </div>
  )
}

export default MessageSender