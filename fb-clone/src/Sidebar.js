import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow';
function Sidebar() {
  return (
    <div className='sidebar'> 
    <SideBarRow title="Tendance" />
    <SideBarRow title="dernières nouvelles"/>
    <SideBarRow title="Sport"/>
    <SideBarRow title="Santé"/>
    </div>
  )
}

export default Sidebar