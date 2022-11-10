import React from 'react';
import './Filter.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsGenderMale, BsGenderFemale, BsEyeglasses } from 'react-icons/bs';
import { IoMaleFemaleOutline, IoShirtOutline } from 'react-icons/io5';
import { GiHighHeel, GiArmoredPants } from 'react-icons/gi';
import { FaRedhat } from 'react-icons/fa';

const Filter = ({ products, fetchProduct }) => {
    return (
        <section className='filter-section'>
            <div className='container d-flex justify-space-between  p-2 filter'>
                <div className='my-4' onClick={() => fetchProduct(`gender=male`)}>
                    Male <BsGenderMale />
                </div>
                <div className='my-4' onClick={() => fetchProduct(`gender=male`)}>
                    Female <BsGenderFemale />
                </div>
                <div className='my-4' onClick={() => fetchProduct(`gender=unisex`)}>
                    Unisex <IoMaleFemaleOutline />
                </div>
                <div className='my-4' onClick={() => fetchProduct(`category=shoes`)}>
                    Shoes <GiHighHeel />
                </div>
                <div className='my-4' onClick={() => fetchProduct(`category=upperwear`)}>
                    Upperwear <IoShirtOutline/>
                </div>
                <div className='my-4' onClick={() => fetchProduct(`category=bottomwear`)}>
                    Bottomwear <GiArmoredPants/>
                </div>
                <div className='my-4' onClick={() => fetchProduct(`category=eyewear`)}>
                    Eyewear <BsEyeglasses/>
                </div>
                <div className='my-4' onClick={() => fetchProduct(`category=headwear`)}>
                    Headwear <FaRedhat />
                </div>
                <div className='my-3 filter-icon' onClick={() => fetchProduct()}>
                    <AiOutlineCloseCircle />
                </div>
            </div>
        </section>
    );
};

export default Filter;
