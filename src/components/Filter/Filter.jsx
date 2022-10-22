import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <section className='filter'>
            <div className='container d-flex justify-space-between  p-5'>
                <div className='my-3'>Male</div>
                <div className='my-3'>Female</div>
                <div className='my-3'>Unisex</div>
                <div className='my-3'>shoes</div>
                <div className='my-3'>upperwear</div>
                <div className='my-3'>Bottomear</div>
                <div className='my-3'>Eyewear</div>
                <div className='my-3'>Headwear</div>
            </div>
        </section>
    );
};

export default Filter;
