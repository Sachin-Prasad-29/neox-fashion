import React, { useState } from 'react';
import './DashBoardProduct.css';

const DashBoardProduct = ({ productDetails, fillData, deleteProduct }) => {
    const { name, _id, cost, gender, category, description } = productDetails;
    return (
        <div>
            <p>
                {name} ---
                {_id}
            </p>

            <p>{cost}</p>
            <p>{gender}</p>
            <p>{category}</p>
            <p>{description}</p>
            <div>
                <button onClick={() => fillData(productDetails)}>Edit</button>
                <button onClick={() => deleteProduct(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default DashBoardProduct;
