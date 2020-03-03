import React from 'react'
import {Button} from 'antd';

function Subscribe() {
    return (
        <div style={{
            width:'80%', 
            backgroundColor:'#afc9d6', 
            textAlign:'center',
            padding: '2rem',
            margin: '1rem auto' }}>
            <h2>Register today for exclusive offers!</h2>
            <h3>Receive £10 vouchers to use in our stores!</h3>
            <br/>
            <Button
            type="primary"
            href="/register">
            Register Now
            </Button>
        </div>
    )
}

export default Subscribe
