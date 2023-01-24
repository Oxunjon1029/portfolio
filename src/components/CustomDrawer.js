import React, { useState } from 'react'
import { Drawer, Menu } from 'antd';
import { menuItems } from '../assets/constants/menuItems';
import smoothScroll from '../assets/functions/smoothScroll';
import logo from '../assets/images/logo.png';
const CustomDrawer = (props) => {
  const [sideBarMenuKey, setSideBarMenuKey] = useState('1');
  const changeSelectedkeyOfMenu = id => {
    let item = menuItems.filter((menu) => menu.id === id)
    setSideBarMenuKey((item[0].key).toString())
  }
  return (
    <Drawer
      closable={false}
      onClose={props.onClose}
      open={props.open}
      key={Math.random()}
      width="65%"
      placement="left"
      bodyStyle={{ backgroundColor: "lightgreen" }}
      footer={
        <h3 style={{color:"white",fontSize:"15px"}}>©Copyright Okhunjon Abdusalomov | All RightReserved.</h3>
      }
      footerStyle={{ backgroundColor: "black" }}
    >
      <div
        style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <img
          style={{ width: "120px", height: "120px", borderRadius: "50%" }}
          src={logo}
          alt='error img' />
      </div>
      <hr color="orange" />
      <Menu
        mode="vertical"
        defaultSelectedKeys={[sideBarMenuKey]}
      >
        {
          menuItems.map((item) => (
            <>
              <Menu.Item
                key={(item.key).toString()}
                onClick={() => {
                  changeSelectedkeyOfMenu(item.id)
                  smoothScroll(item.id)
                  props.onClose()
                }}
                style={{ fontSize: "20px", fontWeight: 'bold', justifyContent: 'space-between', }}
              >
                {item.icon}

                {item.name}
              </Menu.Item>
              <hr color="orange" />
            </>
          ))
        }
      </Menu>
    </Drawer>
  )
}

export default CustomDrawer

