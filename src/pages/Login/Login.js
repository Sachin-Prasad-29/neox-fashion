import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h1>Login Page</h1>
            <Link to='/register'>
                <button>
                    Register
                </button>
            </Link>
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>
        </div>
    );
};

export default Login;
