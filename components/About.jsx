import Image from 'next/image';
import React from 'react';
import Tarot from '../public/images/tarot1.jpg';
import Paranormal from '../public/images/paranormal1.jpg';
import Portal from '../public/images/portal.avif';

function About() {
  return (
    <div className=' h-full bg-zinc-600 '>
      <div className='text-center py-3'>
        <h2 className='text-5xl text-secondary'>Services</h2>
        <p className='text-primary text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias commodi libero cumque
          quod ipsam non molestias, unde velit enim.
        </p>
      </div>
      {/* Card Container */}
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 justify-between max-w-7xl mx-auto'>
          <div className='card card-compact w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image src={Tarot} alt='/' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Tarot Reading</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, perferendis!</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Book Now</button>
              </div>
            </div>
          </div>
          <div className='card card-compact w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image src={Paranormal} alt='/' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Paranormal Investigations</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, officiis?</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Book Now</button>
              </div>
            </div>
          </div>
          <div className='card card-compact w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image height='500px' src={Portal} alt='/' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Portal Sessions</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
