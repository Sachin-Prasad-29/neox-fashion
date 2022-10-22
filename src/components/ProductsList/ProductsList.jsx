import React, { useEffect, useState } from 'react';
import './ProductsList.css'
import axios from 'axios';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const ProductsList = ({products,fetchProduct}) => {
    const url = `http://localhost:5001/api/product`;
    
    
    useEffect(() => {
        fetchProduct(url);
    }, []);
    return (
        <section className='productslist'>
            {products.map((product) => {
              return <SingleProductCard key={product._id} {...product} />;
            })}

        </section>
    );
};

export default ProductsList;
