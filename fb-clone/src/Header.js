import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
      function Header() {
  return (
    <div className='header'> 
      <div className='header__left'></div>
      <div className='header__middle'>
      <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt=""/>
      <div className='header__input'>
        
        <SearchIcon />
        <input type="text" />
      </div>
      </div>
      <div className='header__right'></div>
    </div>
  )
}

export default Header;