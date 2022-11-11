import React from 'react';
import Navbar from '../../components/ui/Navbar/Navbar';
import './Cart.css';
import image from '../../assets/images/UI/empty.svg';

const Cart = ({ cart }) => {
    let total = 0;
    return (
        <>
            <Navbar cartSize={cart.length} />
            <div className='cart-container'>
                {/* <div className='d-flex each-product'>
                    <img
                        src='https://media.istockphoto.com/id/1328049157/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?b=1&s=170667a&w=0&k=20&c=CZ5Emlrh-C4jzojJ8b8YBy1frxpQr6aMcLmEBrkty7Q='
                        alt=''
                        width='150px'
                    />

                    <p>Name</p>
                    <p>12000</p>
                </div>
                <div className='d-flex each-product'>
                    <img
                        src='https://media.istockphoto.com/id/1328049157/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?b=1&s=170667a&w=0&k=20&c=CZ5Emlrh-C4jzojJ8b8YBy1frxpQr6aMcLmEBrkty7Q='
                        alt=''
                        width='150px'
                    />
                    <p>Name</p>
                    <p>12000</p>
                </div>
                <div className='d-flex each-product'>
                    <img
                        src='https://media.istockphoto.com/id/1328049157/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?b=1&s=170667a&w=0&k=20&c=CZ5Emlrh-C4jzojJ8b8YBy1frxpQr6aMcLmEBrkty7Q='
                        alt=''
                        width='150px'
                    />

                    <p>Name</p>
                    <p>12000</p>
                </div>
                <div className='d-flex each-product'>
                    <img
                        src='https://media.istockphoto.com/id/1328049157/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?b=1&s=170667a&w=0&k=20&c=CZ5Emlrh-C4jzojJ8b8YBy1frxpQr6aMcLmEBrkty7Q='
                        alt=''
                        width='150px'
                    />
                    <p>Name</p>
                    <p>12000</p>
                </div> */}

                {cart.length === 0 && (
                    <div className='my-5'>   
                        <img src={image} alt='' width="200px" />
                        
                        <div className='my-5'>Your Cart is Empty....</div>
                    </div>
                )}
                {cart.map((product) => {
                    const { name, price, cost, images, _id } = product;
                    total += parseInt(cost);
                    return (
                        <div key={_id} className='d-flex each-product'>
                            <img src={images} alt='' width='150px' />
                            <p>{name}</p>
                            <p>₹ {cost}.00</p>
                        </div>
                    );
                })}

                {cart.length > 1 && (
                    <div className='checkout'>
                        <p>
                            <b>Total :</b>
                        </p>
                        <p></p>
                        <p>₹ {total}.00</p>
                    </div>
                )}

                <div className='checkout'>
                    <p></p>
                    <p></p>
                    <button className='btn-2 orange'>CheckOut</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
