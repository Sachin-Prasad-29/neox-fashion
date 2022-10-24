import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProductCard.css';

const SingleProductCard = ({ product, addToCart }) => {
    const { name, category, gender, images, cost, description, _id } = product;
    const productId = _id;
    return (
        <div className='product d-flex'>
            <Link to={`/${productId}`} className='d-flex product'>
                <img src={images} alt='' width='150px' />
                <div>{name}</div>
                <div>Rs-{cost}</div>
            </Link>
            <div>
                <button onClick={()=>addToCart(product)}>Buy Now</button>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProductCard;
