import React, { useState } from "react";
import { Typography, Collapse, Form, Input, Select, Button, Popover } from "antd";

const { Title } = Typography;
const { Panel } = Collapse;
const { TextArea } = Input;
const { Option } = Select;

function Contact() {
  const [Email, setEmail] = useState("");
  const [Reason, setReason] = useState("");
const [Message, setMessage] = useState("");
const [ReturnReason, setReturnReason] = useState("");

  const onEmailChange = e => {
    setEmail(e.currentTarget.value);
  };
  const onReasonSelectChange = value => {
    setReason(value);
  };
  const onMessageChange= e =>{
    setMessage(e.currentTarget.value)
  }
  const onReturnReasonSelectChange = e =>{
      setReturnReason(e.currentTarget.value);
  }
  return (
    <div style={{ width:'75%', margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Contact Us</Title>
        <p>
          We aim to make your experience shopping with us positive. In order to
          contact our customer services please fill in the form below to get
          e-mail feeback from our team within 24 hours or call us during working
          hours.
        </p>
      </div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Contact Form" key="1">
          <Form onSubmit>
            <label>E-mail</label>
            <Input onChange={onEmailChange} value={Email} />
            <br />
            <br />
            <label>Reason for contacting:</label>
            <br />
            <Select defaultValue="Choose reason" onChange={onReasonSelectChange}>
      <Option value="Return">Return</Option>
      <Option value="Other">Other</Option>
            </Select>
            <br/>
            <br/>
            {Reason ==="Return" && 
                <div>
                <label>Select reason for return:</label>
                <Select defaultValue="Choose reason for return" >
      <Option value="size">Wrong size</Option>
      <Option value="style">Don't like shoe style</Option>
      <Option value="colour">Don't like shoe colour</Option>
      <Option value="other">Other</Option>
            </Select>
            <br/>
            <br/>
            <label>Order ID:</label>
      <Input />
      <br/><br/>
            </div>
            }
            <div>

                <label>Your message:</label>
                <TextArea onChange={onMessageChange} value={Message} />
              </div>
              <Popover
          title="Message sent!"
          content="Please check your emails"
          trigger="click">
          <Button
            size="large"
            type="danger"
            
          >
            Send
          </Button>
          </Popover>
          </Form>
        </Panel>
        <Panel header="Call Us" key="2">
          <p>
            Please contact our helpline at 0123456789 betwen 9am-5pm
            Monday-Friday.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Contact;
