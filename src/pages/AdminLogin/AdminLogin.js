import React from 'react';

const AdminLogin = () => {
    return (
        <div className='d-flex container '>
            <div className='m-5 d-flex'>
                <label htmlFor='email'>Email : </label>
                <input type='email' id='email' placeholder='Email' />
            </div>
            <div className='m-5 d-flex'>
                <label htmlFor='password'>Password : </label>
                <input type='password' id='password' placeholder='Password' />
            </div>
            <button className='m-5'> Submit</button>
        </div>
    );
}

export default AdminLogin;
