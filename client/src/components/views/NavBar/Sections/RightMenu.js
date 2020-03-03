/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Log In</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Register</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
      <SubMenu title={<span>My Account</span>}>
        {/* <Menu.Item key="setting:1"><a href="/">Account Details</a></Menu.Item> */}
        <Menu.Item key="setting:2"><a href="/track">Track My Order</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/history">Order History</a></Menu.Item>
        <Menu.Item key="setting:4"><a href="/contact">Customer Service</a></Menu.Item>
    </SubMenu>
      <Menu.Item key="upload">
          <a href="/product/upload" style={{color: '#667777'}}>
          Upload</a>
        </Menu.Item>
      <Menu.Item key="cart" style={{paddingTop: 10}}>
      <Badge count={user.userData && user.userData.cart.length} style={{marginRight: 20}}>
          <a href="/user/cart" style={{ color: '#667777'}}>
            <Icon type="shopping-cart" style={{fontSize: 30}} />
          </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

