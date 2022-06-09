import React from 'react'
import MessageSender from './MessageSender'

function Feed() {
  return (
    <div className='feed'>
      <MessageSender />
      <Post />
    </div>
  )
}

export default Feed