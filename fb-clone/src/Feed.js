import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <MessageSender />
      <Post 
      profilePic="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/278863611_5198555353516398_7926664748751654721_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LWsAn0kxlUcAX_c5E-X&_nc_ht=scontent-pmo1-1.xx&oh=00_AT8bK_JZzcmpfQTJDDwUEpob4pagAhaGV4T0S8zCyYdW0Q&oe=62A864CC"
      message="dar hedi"
      timestamp="this is a timestamp"
      username="Bouzid Youssef"
      image="https://indianewengland.com/wp-content/uploads/2016/04/Home-iage.png"
      />
    </div>
  )
}

export default Feed