import React from 'react';
import './Filter.css';

const Filter = ({ products, fetchProduct }) => {
    return (
        <section className=''>
            <div className='container d-flex justify-space-between  p-5 filter'>
                <div className='my-3' onClick={() => fetchProduct(`gender=male`)}>
                    Male
                </div>
                <div className='my-3' onClick={() => fetchProduct(`gender=male`)}>
                    Female
                </div>
                <div className='my-3' onClick={() => fetchProduct(`gender=unisex`)}>
                    Unisex
                </div>
                <div className='my-3' onClick={() => fetchProduct(`category=shoes`)}>
                    Shoes
                </div>
                <div className='my-3' onClick={() => fetchProduct(`category=upperwear`)}>
                    Upperwear
                </div>
                <div className='my-3' onClick={() => fetchProduct(`category=bottomwear`)}>
                    Bottomwear
                </div>
                <div className='my-3' onClick={() => fetchProduct(`category=eyewear`)}>
                    Eyewear
                </div>
                <div className='my-3' onClick={() => fetchProduct(`category=headwear`)}>
                    Headwear
                </div>
                <div className='my-3' onClick={() => fetchProduct()}>
                    Remove Filter
                </div>
            </div>
        </section>
    );
};

export default Filter;
