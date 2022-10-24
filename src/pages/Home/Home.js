import React, { useState } from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Filter from '../../components/Filter/Filter';
import ProductsList from '../../components/ProductsList/ProductsList';
import axios from 'axios';

const Home = ({ addToCart,cartSize }) => {
    const [products, setProducts] = useState([]);
    const fetchProduct = async (url) => {
        const response = await axios(url);
        setProducts(response.data.products);
    };
    return (
        <div>
           
            <Navbar cartSize={cartSize} />
            <Filter />
            <Banner />
            <ProductsList products={products} fetchProduct={fetchProduct} addToCart={addToCart} />
        </div>
    );
};

export default Home;
