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
    <SideBarRow  src="./fb-image" 
 title="Bouzid Youssef" />
    <SideBarRow Icon={WhatshotIcon} title="Tendance" />
    <SideBarRow Icon={FiberNewIcon} title="dernières nouvelles"/>
    <SideBarRow Icon={SportsSoccerIcon} title="Sport"/>
    <SideBarRow Icon={DirectionsRunIcon} title="Santé"/>
    </div>
  )
}

export default Sidebar