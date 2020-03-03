import React from 'react';
import {Typography, Collapse} from 'antd';

const { Title } = Typography;
const { Panel} = Collapse;

function Faq() {
    return (
        <div style={{ width:'75%', margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={2}>Frequently Asked Questions</Title>
          </div>
          <Collapse>
              <Panel header="Track Order" key="1">
                <p>You can track your order after you <a href="/login">login</a> in My Account tab and click <a href="/track">track your order</a>.</p>
              </Panel>
              <Panel header="Shipping Info" key="2">
                <p>We use RoyalMail delivery service and you should expect to receive your items.</p>
              </Panel>
              <Panel header="Returns/Refunds/Exchanges" key="3">
                <p>We accept return on all unused items. Simply go to our <a href="/contact">contact page</a>. Fill out the form and we will contact you and help you proceed.</p>
              </Panel>
              <Panel header="Payment" key="4">
                <p>For processing our payments we accept debit and credit cards as well as Paypal.</p>
              </Panel>
          </Collapse>
          <br/>
          <p style={{textAlign: "center"}}>If any of your questions were not answered here please don't hesitate to <a href="/contact">contact us.</a></p>
        </div>
    )
}

export default Faq
