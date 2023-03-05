import React from 'react'
import Image from 'next/image'

function Skills() {
  return (

    <div id = "skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Skills</p>
            <h2 className='py-4'>What can I do </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/public/assets/skills/python.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PYTHON</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/2560px-Scikit_learn_logo_small.svg.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SCIKIT LEARN</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/pytorch-logo.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PYTORCH</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/tensorflow.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TENSORFLOW</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/Tableau-Logo.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TABLEAU SOFTWARE</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/800px-Nextjs-logo.svg.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT JS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/Snowflake_Logo.svg.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SNOWFLAKE</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'> 
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/MySQL-Logo.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MYSQL</h3>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Skills