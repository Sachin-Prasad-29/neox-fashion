import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashBoardProduct from '../../components/DashBoardProduct/DashBoardProduct';
import './DashBoard.css';

const DashBoard = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [images, setImages] = useState('');
    const [id, setId] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [page, setPage] = useState(1);

    const fetchProduct = async () => {
      
    
        const url = `http://localhost:5001/api/product?page=${page}`;
        const reqData = {
            method: 'get',
            url: `${url}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await axios(reqData);
        console.log(response.data.products);
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
            images,
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
        fetchProduct();
    };
    const fillData = (productDetails) => {
        const { _id, name, category, gender, description, cost, images } = productDetails;
        setEditMode(true);
        setName(name);
        setCategory(category);
        setGender(gender);
        setDescription(description);
        setCost(cost);
        setImages(images);
        setId(_id);
    };

    const editProduct = async () => {
        const changedProductData = { name, category, gender, description, cost, images };
        console.log(changedProductData);
        const url = `http://localhost:5001/api/product/${id}`;
        const reqData = {
            method: 'patch',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: changedProductData,
        };
        const response = await axios(reqData);
        console.log(response.data);
        fetchProduct();
    };

    const deleteProduct = (id) => {};
    useEffect(() => {
        return () => fetchProduct();
    }, [page]);
    return (
        <div className='container d-flex justify-space-between'>
            <div className='form-container'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name of Product'
                />
                <br />
                <label htmlFor='category'>Category </label>

                <select name='category' id='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value='upperwear'>UpperWear</option>
                    <option value='bottomwear'>Bottomwear</option>
                    <option value='eyewear'>Eyewear</option>
                    <option value='headwear'>Headwear</option>
                    <option value='shoes'>Shoes</option>
                    <option value='others'>Others</option>
                </select>
                <br />
                <label htmlFor='gender'>Gender </label>

                <select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='unisex'>Unisex</option>
                </select>
                <br />
                <label htmlFor='description'>Description</label>

                <textarea
                    rows='2'
                    type='text'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description about product'
                />
                <br />
                <label htmlFor='cost'>Cost</label>

                <input
                    type='text'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder='Price of Product'
                />
                <br />
                <label htmlFor='images'>Image</label>

                <input type='text' value={images} onChange={(e) => setImages(e.target.value)} placeholder='ImageUrl' />

                <button onClick={() => (editMode ? editProduct() : addProduct())}>
                    {editMode ? 'Edit Product' : 'Add Product'}
                </button>
                <br />
                {page !== 1 && <button onClick={() => setPage(page - 1)}>prev</button>}
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
            <div className='product-list'>
                {products.map((product) => {
                    const { name, _id, cost, gender, category, description } = product;
                    return (
                        <DashBoardProduct
                            key={_id}
                            productDetails={product}
                            fillData={fillData}
                            deleteProduct={deleteProduct}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DashBoard;
