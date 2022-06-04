import React from 'react';
import "./SideBarRow.css";

function SideBarRow(props) {
  return (
    <div className='SideBarRow'>
        <p>{props.title}</p>
    </div>
  )
}

export default SideBarRow