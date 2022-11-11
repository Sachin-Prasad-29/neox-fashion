import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!email) return false;
        if (!password) return false;
        if (password.length < 8) return false;
        return true;
    };
    const onLogin = async () => {
        const url = `https://e-commerce-server-ejfu741tw-sachin-prasad-29.vercel.app/api/auth/login`;
        if (!validate()) {
            alert('Please fill all the field correct');
        } else {
            const userDetails = { email, password };
            const reqData = {
                method: 'post',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userDetails,
            };
            const response = await axios(reqData);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            
            navigate('/');
        }
    };

    return (
        <div className='container'>
            <div>
                <div>
                    <h2>Sign in</h2>
                </div>
                <div className='mt-3'>
                    <label htmlFor='email'>Email</label> <br />
                    <input
                        type='email'
                        id='email'
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='email'>Password</label> <br />
                    <input
                        type='email'
                        id='email'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <button onClick={onLogin}>Sign In</button>
                </div>
                <br />
            </div>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            <Link to='/'>
                <button className='m-2'>Home</button>
            </Link>
        </div>
    );
};

export default Login;
