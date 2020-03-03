import React, { useState, useEffect } from "react";
import { Button, Menu, Dropdown, Descriptions, Icon, Popover} from "antd";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});
  const [Size, setSize] = useState("Select size:");

  useEffect(() => {
    setProduct(props.detail);
    console.log(props.detail);
  }, [props.detail]);

  const addToCartHandler = () => {
    props.addToCart(props.detail._id);
  };
  function handleMenuClick(e) {
    setSize(e.key);
  }
  const showAlert = ()=>{
    alert("Done! Remember to check your e-mails.");
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="4">4</Menu.Item>
      <Menu.Item key="5">5</Menu.Item>
      <Menu.Item key="6">6</Menu.Item>
      <Menu.Item key="7">7</Menu.Item>
      <Menu.Item key="8">8</Menu.Item>
    </Menu>
  );
  const sizeChart = (
      <div>
        <table>
            <thead>
                <th>UK</th>
                <th>EU</th>
                <th>millimiters</th>
            </thead>
            <tbody>
                <tr>
                    <td>4</td>
                    <td>37</td>
                    <td>229</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>38</td>
                    <td>237</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>39</td>
                    <td>246</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>41</td>
                    <td>254</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>42</td>
                    <td>263</td>
                </tr>
            </tbody>
        </table>
      </div>
  )

  return (
    <div>
      <Descriptions title="Product Information">
        <Descriptions.Item label="Price">£{Product.price}</Descriptions.Item>
        <Descriptions.Item label="Stock">{Product.stock}</Descriptions.Item>
        <Descriptions.Item label="Style ID">
          46987235579
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {Product.description}
        </Descriptions.Item>
        {/* Add other stuff like size/color */}
      </Descriptions>
      <br />

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>

          <Popover content={sizeChart} title="Size Chart" trigger="click">
              <Button>
              <Icon type="read" style={{fontSize:20}}/>
              Size Chart</Button>
          </Popover>
          <Button><Icon type="interaction" /> Delivery & Returns</Button>
          </div>
        {Product.stock > 0 ? (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <Dropdown overlay={menu}>
            <Button size="large"
            >
              {Size}
              <Icon type="down" />
            </Button>
          </Dropdown>
          <Popover
          title="Item Added!"
          content={<a href="/user/cart">View cart<Icon type="arrow-right" /></a>}
          trigger="click">
          <Button
            size="large"
            type="danger"
            onClick={addToCartHandler}
          >
            Add To Cart
          </Button>
          </Popover>
          </div>
        ) : (
            <div style={{textAlign:'center'}}>
          <h2>
            Sorry, this item is currently out of stock <Icon type="frown" />
          </h2>
          <Button
            size="large"
            shape="round"
            type="danger"
            onClick={showAlert}
          > Notify me when in stock
            <Icon type="mail" />
          </Button>
          </div>
        )}
    </div>
  );
}

export default ProductInfo;
