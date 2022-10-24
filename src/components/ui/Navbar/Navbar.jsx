import React, {  } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
import logo from '../../../assets/images/UI/shop-icon.png';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';

const Navbar = ({cartSize}) => {
    return (
        <nav>
            <div className='container d-flex'>
                <div className='logo my-2'>
                    <img src={logo} alt='neox-fashion-logo' />
                </div>
                <div className='main-nav d-flex justify-space-between align-center my-2'>
                    <ul className='no-bullet logo-ul'>
                        <li>NeoX-Fashion </li>
                    </ul>
                    <ul className='no-bullet link-ul'>
                        <li className='d-inline'>
                            <input type='text' placeholder='Search for product' />
                            <button className='btn mx-2'>
                                <BsSearch />
                            </button>
                        </li>
                        <li className='d-inline mx-5'>
                            <Link to='/cart'>
                            <BsCart3 />
                            Cart-{cartSize}
                            </Link>
                        </li>
                        <li className='d-inline'>
                            <button className='btn'>
                                Login
                                <CiLogin />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
