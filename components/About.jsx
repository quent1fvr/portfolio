import React from 'react'
import Link from 'next/link';
import about from 'public/About.png'
import Image from 'next/image';

const About = () => {
  return (
    <div id = "about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'> Who I am</h2>
                <p className='py-2 text-gray-600'>
                    
                </p>
                <p className=' py-2 text-gray-600'>
                Coming from the north of France, I am someone who loves to adapt to new environments.
                 My internship in Spain in May 2021 and my year in the UK in 
                2022/2023 have allowed me to open up to the world.
                I have always loved new technologies and innovation.
                 That's why I decided to focus on artificial intelligence this year at Cranfield University.
                 In my free time, I love working out.                 </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex iterms-center justify-center p-4 hover:scale-105 ease-in duration-300'> 
                <Image className='rounded-xl' src={about} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About