import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
            <h1>Register Page</h1>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Register;
