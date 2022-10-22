import React,{useState} from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Filter from '../../components/Filter/Filter';
import ProductsList from '../../components/ProductsList/ProductsList';
import axios from 'axios';


const Home = () => {
    const [products, setProducts] = useState([]);
    const fetchProduct = async (url) => {
        const response = await axios(url);
        setProducts(response.data.products);
    };
    return (
        <div>
            <Navbar />
            <Filter />
            <Banner />
            <ProductsList products={products} fetchProduct={fetchProduct}/>
        </div>
    );
};

export default Home;
