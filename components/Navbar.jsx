import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import logo from '../public/images/logo-main.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='w-screen h-20 z-10 bg-zinc-900 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex mr-4 items-center'>
          <div className='w-60 mt-5 mr-8 '>
            <Image src={logo} alt='heart beat spirit' />
          </div>
          <ul className='hidden md:flex text-cyan-50'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Test</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-cyan-50 pr-4'>Sign In</button>
          <button className='px-8 py-3 '>Sign Up</button>
        </div>
        <div className='md:hidden text-cyan-50' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-900 w-full px-8 text-cyan-50'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Services</li>
        <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <li className='border-b-2 border-zinc-300 w-full'>Test</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-cyan-50 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
