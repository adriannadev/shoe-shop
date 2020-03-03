import React, {useEffect, useState} from 'react'
import { Typography} from "antd";
import Axios from 'axios';

const { Title } = Typography;

function OrderHistory() {
    
const [History, setHistory] = useState([]);

useEffect(() => {
   Axios.get('/api/users/getHistory')
   .then(response=>{
       if(response.data.success){
            setHistory(response.data.history)
       }else{
           alert("Failed to get history")
       }
   })
}, [])



    return (
        <div style={{ width: '90%', margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={2}>Order History</Title>
        </div>
        <table >
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Shipment ID</th>
                </tr>
              </thead>
              <tbody >
              {History.map(item=>(
                  <tr key = {item._id}>
                      <td>{item.orderId}</td>
                      <td>{item.orderDate}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>SH9283629</td>
                  </tr>
              ))}
              </tbody>
            </table>
          
      </div>
    )
}

export default OrderHistory
