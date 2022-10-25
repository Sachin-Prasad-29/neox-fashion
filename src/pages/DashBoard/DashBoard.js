import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashBoard = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [images,setImages] = useState('');
    const fetchProduct = async () => {
        const url = `http://localhost:5001/api/product`;
        const reqData = {
            method: 'get',
            url: `${url}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios(reqData);
        setProducts(response.data.products);
    };
    const addProduct = async () => {
        const url = 'http://localhost:5001/api/product';
        const productDetails = {
            name,
            category,
            gender,
            description,
            cost,
            images
        };
        const reqData = {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: productDetails,
        };

        const response = await axios(reqData);
        console.log(response);
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <div className='container d-flex'>
            <div className='m-5'>
                <div className='mt-3'>
                    <label htmlFor='name'>Name</label> <br />
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name of Product'
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='category'>Category </label>
                    <br />
                    <select
                        name='category'
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value='upperwear'>UpperWear</option>
                        <option value='bottomwear'>Bottomwear</option>
                        <option value='eyewear'>Eyewear</option>
                        <option value='headwear'>Headwear</option>
                        <option value='shoes'>Shoes</option>
                        <option value='others'>Others</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label htmlFor='gender'>Gender </label>
                    <br />
                    <select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='unisex'>Unisex</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label htmlFor='description'>Description</label>
                    <br />
                    <textarea
                        rows='2'
                        type='text'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description about product'
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='cost'>Cost</label>
                    <br />
                    <input
                        type='text'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        placeholder='Price of Product'
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='images'>Cost</label>
                    <br />
                    <input type='text' value={images} onChange={(e) => setImages(e.target.value)} placeholder='ImageUrl' />
                </div>
                <div className='mt-3'>
                    <button onClick={addProduct}>Add Product</button>
                </div>
            </div>
            <div>
                {products.map((product) => {
                    const { name, _id, cost, gender, category, description } = product;
                    return (
                        <div key={_id}>
                            <p>
                                {name} ---
                                {_id}
                            </p>

                            <p>{cost}</p>
                            <p>{gender}</p>
                            <p>{category}</p>
                            <p>{description}</p>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DashBoard;