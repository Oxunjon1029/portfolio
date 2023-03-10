import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
import '../assets/styles/header.css';
import scrollFunc from '../assets/functions/scroll';
import smoothScroll from '../assets/functions/smoothScroll';
import { menuItems } from '../assets/constants/menuItems';
import logo from '../assets/images/logo.png';
const Header = () => {
  const [iconStatus, setIconStatus] = useState(true);

  window.onscroll = function () {
    scrollFunc('myHeader');
  };

  return (
    <div className='header' id='myHeader'>
      <img className="logo" src={logo} alt="error img" />
      <div className='menu'>
        <Menu
          mode='horizontal'
          style={{
            width: '500px',
            opacity: `${!iconStatus ? 1 : 0}`,
            backgroundColor: 'transparent',
            transition: "ease-in-out 0.5s"
          }}
          className="menuHorizontal"
        >
          {menuItems?.map((item) => {
            return (
              <Menu.Item key={item.key} onClick={() => smoothScroll(item.id)}>
                {item.name}
              </Menu.Item>
            );
          })}
        </Menu>

        <div className='menu_burger'>
          {iconStatus ? (
            <MenuUnfoldOutlined
              onClick={() => setIconStatus(false)}
              style={{ color: 'orange', fontWeight: 'bold', fontSize: '20px' }}
            />
          ) : (
            <CloseOutlined
              onClick={() => setIconStatus(true)}
              style={{ color: 'orange', fontWeight: 'bold', fontSize: '20px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
