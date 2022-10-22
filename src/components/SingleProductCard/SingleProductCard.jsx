import React from 'react';
import {Link} from 'react-router-dom'
import './SingleProductCard.css'

const SingleProductCard = (product) => {
    const { name, category, gender, images, cost, description,_id } = product;
    const productId =_id;
    return (
        <Link to={`/${productId}`}>
            <div className='product d-flex'>
                <img src={images} alt='' width='150px' />
                <div>{name}</div>
                <div>Rs-{cost}</div>
            </div>
        </Link>
    );
};

export default SingleProductCard;
