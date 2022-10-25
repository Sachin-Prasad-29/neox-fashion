import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    return (
        <>
            <div className='d-flex'>
                {cart.length === 0 && <div>NO Item in the Cart</div>}
                {cart.map((product) => {
                    const { name, price, cost, images, _id } = product;
                    total += parseInt(cost);
                    return (
                        <div key={_id}>
                            <img src={images} alt='' width='100px' />
                            <p>{name}</p>
                            <p>{cost}</p>
                        </div>
                    );
                })}
            </div>
            {cart.length > 1 && (
                <div>
                    <p>Total : {total}</p>
                    <button>CheckOut</button>
                </div>
            )}
        </>
    );
};

export default Cart;
