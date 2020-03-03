import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: ".7rem",
        boxShadow:' 0 0 30px #f3f1f1',
        width:'100%'
            }}
    >
    <p >
        ©{new Date().getFullYear()} MyShoes |
        <a href="/about"> About </a> | 
        <a href="/contact"> Contact</a>
      </p>
      <p>
      
        <a href="http://facebook.com" target="_blank">
          {" "}
          <Icon type="facebook" style={{ fontSize: 20 }} />{" "}
        </a>
        <a href="http://instagram.com" target="_blank">
          {" "}
          <Icon type="instagram" style={{ fontSize: 20 }} />{" "}
        </a>
        <a href="http://twitter.com" target="_blank">
          {" "}
          <Icon type="twitter" style={{ fontSize: 20 }} />{" "}
        </a>
      </p>
      
    </div>
  );
}

export default Footer;
