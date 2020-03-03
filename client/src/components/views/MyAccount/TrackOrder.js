import React, {useState, useEffect} from "react";
import { Typography, Collapse, Descriptions, Button, Icon } from "antd";
import Axios from 'axios';

const { Title } = Typography;
const { Panel } = Collapse;

function TrackOrder() {
    const [History, setHistory] = useState([]);
    const [LastOrder, setLastOrder] = useState([]);

useEffect(() => {
   Axios.get('/api/users/getHistory')
   .then(response=>{
       if(response.data.success){
            setHistory(response.data.history)
            setLastOrder(response.data.history[response.data.history.length-1])
       }else{
           alert("Failed to get history")
       }
   })
}, [])

  return (
    <div style={{ width:"80%", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Order Details</Title>

        <Collapse bordered={false}>
          <Panel
            header="Need help with your oder?"
            key="1"
            showArrow={false}
            style={{ backgroundColor: "#f8f8f8", borderRadius: 4 }}
          >
            <p>
              Please go to our <a href="/faq">FAQ page</a> for help.
              <br />
              If your question is not answered you can{" "}
              <a href="/contact">contact us here.</a>
            </p>
          </Panel>
        </Collapse>
      </div>
      <Descriptions>
        <Descriptions.Item label="Order Status">Shipped</Descriptions.Item>
        <Descriptions.Item label="Order ID">{LastOrder.orderId}</Descriptions.Item>
        <Descriptions.Item label="Order Date">{LastOrder.orderDate}</Descriptions.Item>
      </Descriptions>
      <br />
      <Collapse defaultActiveKey={["1", "2"]}>
        <Panel header="Shipping and Tracking" key="1">
        <Descriptions>
        <Descriptions.Item label="Shipment Number">12414124</Descriptions.Item>
        <Descriptions.Item label="Shipped On">21.02.2020</Descriptions.Item>
        <Descriptions.Item label="Shipping Agent">Royal Mail</Descriptions.Item>
        <Descriptions.Item label="Tracking Code">1393169825687346GB  
                <Button
                type="danger"
                href="https://www.royalmail.com/track-your-item"
                target="_blank"
                size="small"
                style={{margin:'.7rem'}}><Icon type="compass" />Track</Button>
                </Descriptions.Item>
      </Descriptions>
        </Panel>
        <Panel header="Ordered Items" key="2">
          <table>
          <thead>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Quantity</th>
            </thead>
            <tbody>
                {History.filter(item=>(item.orderId === LastOrder.orderId)).map(item=>(
                  <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel header="Shipping Info" key="3">
          <p>Here is your info</p>
        </Panel>
        <Panel header="Payment Information" key="4">
          <p>
            For processing our payments we accept debit and credit cards as well
            as Paypal.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default TrackOrder;
