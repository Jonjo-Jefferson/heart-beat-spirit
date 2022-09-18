import React from 'react';
import planchette from '../public/images/planchette.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' h-screen bg-zinc-900 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-7xl m-auto'>
        <div className='flex flex-col md:items-start px-2 py-8 text-center md:text-left'>
          <p className='text-2xl text-accent'>Tarrot Reading, TikTok, portal</p>
          <h1 className='py-3 text-4xl md:text-6xl font-bold text-primary '>HEARTBEAT SPIRIT COMMUNICATIONS</h1>
          <button className='btn btn-secondary text-neutral'>Book a Reading</button>
        </div>
        <div className='w-full mt-12 md:mt-0'>{/* <Image src={planchette} alt='planchette' /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
