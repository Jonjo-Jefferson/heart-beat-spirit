import React from 'react';
import hero1 from '../public/images/hero1.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' h-screen bg-zinc-900 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-7xl m-auto'>
        <div className='flex flex-col md:items-start px-2 py-8 text-center md:text-left'>
          <p className='text-2xl text-secondary'>
            Paranormal Investigators | Tarot Readings | Portal Sessions
          </p>
          <h1 className='py-3 text-4xl md:text-6xl font-bold text-primary font-Space '>
            HEARTBEAT SPIRIT COMMUNICATIONS
          </h1>
          <button className='btn btn-secondary text-neutral my-2'>Book a Reading</button>
        </div>
        <div className=' max-w-sm opacity-10'>
          <Image alt='/' src={hero1} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
