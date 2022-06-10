import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <MessageSender />
      <Post 
      profilePic="https://tn.linkedin.com/in/youssef-bouzid-338381222"
      message="dar hedi"
      timestamp="this is a timestamp"
      username="Bouzid Youssef"
      image="https://indianewengland.com/wp-content/uploads/2016/04/Home-iage.png"
      />
    </div>
  )
}

export default Feed