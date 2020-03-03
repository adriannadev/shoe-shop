import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems, removeCartItem, onSuccessOrder } from "../../../_actions/user_actions";
import UserCardBlock from "./UserCardBlock";
import { Result, Empty, Button } from "antd";
import Axios from "axios";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach(item => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart));
      }
    }
  }, [props.user.userData]);

  useEffect(() => {
    if (props.user.cartDetails && props.user.cartDetails.length > 0) {
      calculateTotal(props.user.cartDetails);
    }
  }, [props.user.cartDetails]);

  const calculateTotal = cartDetails => {
    let total = 0;
    cartDetails.map(item => {
      total += parseFloat((item.price) * item.quantity);
    });
    setTotal(total);
    setShowTotal(true);
  };
  const removeFromCart = productId => {
    dispatch(removeCartItem(productId))
    .then(()=>{
        if(props.user.cartDetails.length <=1){
            setShowTotal(false);
        }else {
            calculateTotal(props.user.cartDetails)
        }
    });
  };

  const orderSuccess=()=>{
    let variables={
      cartDetails: props.user.cartDetails,

    }
    Axios.post('/api/users/successOrder', variables)
    .then(response=>{
      if(response.data.success){
        setShowSuccess(true);
        setShowTotal(false);

        dispatch(onSuccessOrder({cart: response.data.cart,
        cartDetails: response.data.cartDetails}))
      } else {
        alert("Fail to process payment.")
      }
    })
  }
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Cart</h1>
      <div>
        <UserCardBlock
          products={props.user.cartDetails}
          removeItem={removeFromCart}
        />
       
        {ShowTotal ?
            <div style={{ marginTop: "3rem" }}>
          <h2>Total: £{Total.toFixed(2)}</h2>
          <Button
          type="danger"
          onClick={orderSuccess}>
            Pay Now
          </Button>
        </div> :
            ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <br />
            <Empty description={false} />
            <p style={{textAlign: 'center'}}>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
