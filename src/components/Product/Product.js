import React from 'react';
import './Product.css';

const product = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Product extends React.Component{
  render(){
    return(
      <div className="product">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{product.name}</h2>
        <div className="Product-information">
          <div className="Product-address">
            <p>{product.address}</p>
            <p>{product.city}</p>
            <p>{product.state} {product.zipCode}</p>
        </div>
        <div className="Product-reviews">
          <h3>{product.category}</h3>
          <h3 className="rating">{product.rating}</h3>
          <p>{product.reviewCount}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Product;
