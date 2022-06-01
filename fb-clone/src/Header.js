import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';      
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import FaceIcon from '@material-ui/icons/Face';

    function Header() {
  return (
    <div className='header'> 
      <div className='header__left'>
        <div className='header__info'>
          <FaceIcon />
          <h4>Youssef Bouzid</h4>
        </div>
      </div>
      <div className='header__middle'>
      <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt=""/>
      <div className='header__input'>
        
        <SearchIcon />
        <input type="text" />
      </div>
      </div>
      <div className='header__right'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize="large" /> 
        </div>
        <div className='header__option'>
          <SendTwoToneIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SettingsInputSvideoIcon fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Header;