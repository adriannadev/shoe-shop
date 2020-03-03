import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {Row, Col, Modal} from 'antd';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import {addToCart} from '../../../_actions/user_actions'
import {useDispatch} from 'react-redux';


function ProductPage(props ) {

    const dispatch = useDispatch();
    const productId=props.match.params.productId;
    const [Product, setProduct] = useState([]);
    const [Popup, setPopup] = useState(false)

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
        .then(response=>{
            setProduct(response.data[0])
        })
         
    }, [])

    const handleOk = e => {
        window.location.href='/login'
      };
      const handleCancel = e => {
        console.log(e);
        setPopup(false);
      };

    const addToCartHandler= (productId)=>{
        if(!props.user.userData.isAuth){
            setPopup(true);
        }
        dispatch(addToCart(productId));
    }
    return (
        <div className="postPage" style={{width:'100%', padding: '3rem 4rem'}}>
        <div style = {{display:'flex', justifyContent:'center'}}>
        <Modal
          title="You are not logged in!"
          visible={Popup}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>To continue with your purchase please log in!</p>
        </Modal>
            <h1>{Product.title}</h1>
        </div>
        <br/>
            <Row gutter={[16,16]}>
                <Col lg={12} xs={24}>
                    <ProductImage
                    detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                    addToCart={addToCartHandler} 
                        detail={Product}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default ProductPage
