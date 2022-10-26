import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!name) return false;
        if (!email) return false;
        if (!password) return false;
        if (password.length < 8) return false;
        return true;
    };
    const onSignup = async (e) => {
        
        const url = `http://localhost:5001/api/auth/register`;
        e.preventDefault();
        if (!validate()) {
            alert('Please Enter the all field Correct');
            
        } else {
            const userDetails = { name, email, password };
            const reqData = {
                method: 'post',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userDetails,
            };
            const response = await axios(reqData);
            navigate('/admin')
            console.log(response.data);
            navigate('/login');
       
        }
    };
    return (
        <div className='container'>
            <div>
                <div>
                    <h2>Sign Up</h2>
                </div>
                <div className='mt-3'>
                    <label htmlFor='name'>Name</label>
                    <br />
                    <input
                        type='text'
                        id='name'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <button onClick={onSignup}>Sign UP</button>
                </div>
            </div>
            <br />

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
