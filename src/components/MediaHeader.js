import { MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';
import CustomDrawer from './CustomDrawer';
const MediaHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className='mediaHeader'>
      <img className='mediaLogo' src={logo} alt='error img' />
      <div className='mediaMenu'>
        <CustomDrawer onClose={onClose} open={open} text="©Copyright Okhunjon Abdusalomov | All RightReserved." />
        <div className='mediaMenuBurger'>
          <MenuUnfoldOutlined
            onClick={() => {
              showDrawer();
            }}
            style={{ color: 'orange', fontWeight: 'bold', fontSize: '20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaHeader;
