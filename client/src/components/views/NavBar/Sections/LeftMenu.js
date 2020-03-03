import React from 'react';
import { Menu } from 'antd';
import {categories} from "../../Datas";

const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <SubMenu title="Men">
      {categories.map(item=>(
        <Menu.Item key={item._id}>{item.name}</Menu.Item>
      ))}
      </SubMenu>
      <SubMenu title="Women" >
      {categories.map(item=>(
        <Menu.Item key={item._id}>{item.name}</Menu.Item>
      ))}
    </SubMenu> */}
    {/* <Menu.Item key="about">
      <a href="/">About</a>
    </Menu.Item> */}
    <Menu.Item key="faq">
      <a href="/faq">FAQ</a>
    </Menu.Item>
    <Menu.Item key="contact">
      <a href="/contact">Contact</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu