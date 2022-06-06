import React from 'react';
import "./SideBarRow.css";
import FaceIcon  from '@material-ui/icons/Face';

function SideBarRow({src, Icon, title}) {
  return (
    <div className='SideBarRow'>
        {src && <FaceIcon src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SideBarRow;