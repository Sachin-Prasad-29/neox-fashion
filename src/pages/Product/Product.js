import React, { useEffect, useState } from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = ({ cartSize }) => {
    const { productId } = useParams();
    const url = `http://localhost:5001/api/product/${productId}`;
    const [product, setProduct] = useState('');
    const fetchProduct = async (url) => {
        const response = await axios.get(url);
        setProduct(response.data.product);
    };
    useEffect(() => {
        return () => {
            fetchProduct(url);
        };
    }, []);

    return (
        <section className='Product'>
            <Navbar cartSize={cartSize} />
            {product && (
                <div className='product-details'>
                    <img src={product.images} alt='' width='50%' />
                    <p>{product.name}</p>
                    <p>rs-{product.cost}</p>
                    <p>{product.description}</p>
                    <p>{product.gender}</p>
                    <h4>Review:</h4>
                    {product.review.map((eachReview,index) => {
                        return <p key={index}>{eachReview}</p>;
                    })}
                </div>
            )}
        </section>
    );
};

export default Product;
