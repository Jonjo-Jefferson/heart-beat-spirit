import React from 'react';
import planchette from '../public/images/planchette.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-screen max-w-full h-screen bg-zinc-900 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-7xl m-auto '>
        <div className='flex flex-col md:items-start w-full px-2 py-8'>
          <p className='text-2xl text-accent'>Tarrot Reading, TikTok, portal</p>
          <h1 className='py-3 text-5xl md:text-6xl font-bold text-primary font-Space '>HEARTBEAT SPIRIT COMMUNICATIONS</h1>
          <button className='btn btn-secondary text-neutral'>Book a Reading</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
