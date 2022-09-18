import React from 'react';
import planchette from '../public/images/planchette.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-7xl m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl text-cyan-50'>Tarrot Reading, TikTok, portal</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold text-cyan-50 font-Aref'>Heartbeat Spirit Communications</h1>
          <button className='py-3 px-6 sm:w-[60%]'>Book a Reading</button>
        </div>
        <div>
          <Image className='w-full' src={planchette} alt='portal' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
