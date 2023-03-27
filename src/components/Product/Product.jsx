import React from 'react';
import './Product.css'


const Product = (props) => {

    const { id, name, seller, price, ratings, ratingsCount, img, shipping, quantity } = props.product;
    const handleAddToCard = props.handleAddToCard;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} start</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn-card'>
                Add to card
            </button>
        </div>
    );
};

export default Product;