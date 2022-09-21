import Image from 'next/image';
import React from 'react';
import Tarot from '../public/images/tarot1.jpg';
import Paranormal from '../public/images/paranormal1.jpg';
import Portal from '../public/images/portal.avif';

function About() {
  return (
    <section className='bg-white dark:bg-gray-900 grid mx-auto'>
      <div className='mx-auto'>
        <h1 className='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Services
        </h1>

        <p className='mt-4 text-center text-gray-500 dark:text-gray-300'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibusss
        </p>

        <div class='grid grid-cols-1 gap-8 mt-8  xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
          <div className='max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto'>
            <Image width={500} height={500} src={Tarot} alt='Tarot Reading' />
            <div className='flex flex-col justify-between p-6 space-y-8'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-semibold tracking-wide'>Tarot Reading</h2>
                <p className='dark:text-gray-100'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illo corrupti,
                  voluptatem esse aperiam cum molestiae ex perspiciatis? Vitae, nam!
                </p>
              </div>
              <button
                type='button'
                className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900'
              >
                Book A Reading
              </button>
            </div>
          </div>

          <div className='max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto'>
            <Image width={500} height={500} src={Paranormal} alt='Paranormal Investigations' />
            <div className='flex flex-col justify-between p-6 space-y-8'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-semibold tracking-wide'>Paranormal Investigations</h2>
                <p className='dark:text-gray-100'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia repellendus
                  perferendis facere sed laborum aspernatur pariatur est minima doloribus!
                </p>
              </div>
              <button
                type='button'
                className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900'
              >
                Book Investigation
              </button>
            </div>
          </div>

          <div className='max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto'>
            <Image width={500} height={500} src={Portal} alt='Portal Sessions' />
            <div className='flex flex-col justify-between p-6 space-y-8'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-semibold tracking-wide'>Portal Sessions</h2>
                <p className='dark:text-gray-100'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae impedit pariatur
                  tenetur dolores facere nemo iusto sint tempore? Nihil!
                </p>
              </div>
              <button
                type='button'
                className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900  '
              >
                Book Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
