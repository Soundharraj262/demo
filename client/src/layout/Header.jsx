import React from 'react';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Profile from '../../src/pages/Profile';
import LoginForm from '../pages/LoginForm';
import Display from '../pages/DisplayData';
import SignupData from '../pages/signupData';
import About from '../pages/About';

const Header = () => (
    <header className='w-screen h-12 rounded-b-3xl shadow-[0px_0px_18px_#efe808] border-b-2 border-[#efe808] bg-black'>
        <ul className='flex justify-center items-center gap-32  w-screen h-12 rounded-t-xl glassmorphism text-[#adadad] font-extrabold'>
            {/* Navigation Links */}
            <li className=''>
                <Link to='/'>Home</Link>
            </li>
            <li className=''>
                <Link to='/SignupData'>Settings</Link>
            </li>
            <li className=''>
                <Link to='/About'>About</Link>
            </li>
            <li className=''>
                <Link to='/Services'>Services</Link>
            </li>
            <li className=''>
                <Link to='/LoginForm'>signup</Link>
            </li>
        </ul>
        
        {/* Route Definitions */}
        <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/signupDSignupDataata' element={<signupData />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Services' element={<h1>Services</h1>} />
            <Route path='/LoginForm' element={<LoginForm />} />
            <Route path='/DisplayData' element={<Display/>} />
            <Route path='/SignupData' element={<SignupData/>} />
        </Routes>
        
        {/* Outlet component if you want nested routes */}
        <Outlet />
    </header>
);

export default Header;
