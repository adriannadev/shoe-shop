import React from "react";

function UserCardBlock(props) {
    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0];
            return `http://localhost:5000/${image}`;
        }
    }
    const renderItems = ()=>(
        props.products && props.products.map(product=>(
            <tr key={product._id}>
                <td>
                    <img style={{width:'70px'}} 
                    alt="product" 
                    src={renderCartImage(product.images)}/>
                    <span style={{margin: '1rem'}}>{product.title}</span>
                </td>
                <td>{product.quantity}</td>
                <td>£{product.price}</td>
                <td style={{textAlign:'center'}}><button 
                onClick={()=> props.removeItem(product._id)}
                >Remove</button></td>
            </tr>
        ))
    )
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>
        {renderItems()}
        </tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
