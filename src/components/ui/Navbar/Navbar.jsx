import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/images/UI/shop-icon.png';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';

const Navbar = ({ cartSize }) => {
    const user = localStorage.getItem('name');
    return (
        <nav>
            <div className='container d-flex'>
                <div className='logo my-2'>
                    <Link to='/'>
                        <img src={logo} alt='neox-fashion-logo' />
                    </Link>
                </div>
                <div className='main-nav d-flex justify-space-between align-center my-2'>
                    <ul className='no-bullet logo-ul'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li className='no-style'>NeoX-Fashion </li>
                        </Link>
                    </ul>
                    <ul className='no-bullet link-ul'>
                        <li className='d-inline'>
                            <input type='text' placeholder='Search for product' />
                            <button className='btn mx-2'>
                                <BsSearch />
                            </button>
                        </li>
                        <li className='d-inline mx-5'>
                            <Link to='/cart' style={{ textDecoration: 'none' }}>
                                <BsCart3 />
                                 Cart-{cartSize}
                            </Link>
                        </li>
                        {!user && (
                            <li className='d-inline'>
                                <Link to='/login'>
                                    <button className='btn'>
                                        Login
                                        <CiLogin />
                                    </button>
                                </Link>
                            </li>
                        )}
                        {user && (
                            <span>
                                Hello <b>{user}</b>
                            </span>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
