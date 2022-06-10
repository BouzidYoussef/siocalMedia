import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';


function Sidebar() {
  return (
    <div className='sidebar'> 
    <SideBarRow  src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/278863611_5198555353516398_7926664748751654721_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LWsAn0kxlUcAX_c5E-X&_nc_ht=scontent-pmo1-1.xx&oh=00_AT8bK_JZzcmpfQTJDDwUEpob4pagAhaGV4T0S8zCyYdW0Q&oe=62A864CC" 
 title="Bouzid Youssef" />
    <SideBarRow Icon={WhatshotIcon} title="Tendance" />
    <SideBarRow Icon={FiberNewIcon} title="dernières nouvelles"/>
    <SideBarRow Icon={SportsSoccerIcon} title="Sport"/>
    <SideBarRow Icon={DirectionsRunIcon} title="Santé"/>
    </div>
  )
}

export default Sidebar