import React, { useState } from 'react';
import './DashBoardProduct.css';

const DashBoardProduct = ({ productDetails, fillData, deleteProduct }) => {
    const { name, _id, cost, gender, category, description,images } = productDetails;
    return (
        <div className='eachProduct'>
            <p>Name : {name} </p>
            <img src={images} alt="" width="100px"/>
            <p>
                Rs : {cost}, &nbsp; Gender : {gender}, &nbsp;Category : {category}
            </p>
            <p>Desc : {description}</p>
            <div>
                <button onClick={() => fillData(productDetails)}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => deleteProduct(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default DashBoardProduct;
