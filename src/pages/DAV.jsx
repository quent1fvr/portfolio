import React from 'react';
import Image from 'next/image';
import davImage from 'public/assets/projects/dav.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import degBetween from 'public/assets/projects/DAV_projects/degBetwenn.png'
import general_result from 'public/assets/projects/DAV_projects/general result.png'
import cluster from 'public/assets/projects/DAV_projects/US_cluster.png'
import degree from 'public/assets/projects/DAV_projects/US_degree.png'


const DAV = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={davImage} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Graph Study of the airline network traffic</h2>
                    <h3> Python, NetworkX , Cartopy, Graph theory </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='py-4'>The aim of this study is to select, apply and study network data analysis across different graph scales using passenger flight data.</p>
                    <div className='flex justify-center py-8'>

                    <Image   src={general_result} alt='/' height={700} width={500}/>
                    </div>

                    <p>The objectives of this works was as follows:
Transform flight & airport data into network form and perform
 graph analysis across 3 different scales: 1) macro-scale, 2) meso-scale, 3) node-level.
</p>
                    <div className='flex justify-between py-8'>
                    <Image   src={cluster} alt='/' height={400} width={300}/>
                    <Image   src={degree} alt='/'height={400} width={300} />
                    <Image   src={degBetween} alt='/' height={400} width={300}/>
                    </div>
                    <div className='flex justify-center'>
                    <button className='px-8 py-2 mt-4 mr-8'>Download Report</button>
                    <Link  href="https://github.com/quent1fvr/Airline_network_DAV">
                    <button className='px-8 py-2 mt-4 ' >Code</button>
                    </Link>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NetworkX</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Cartopy</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Graph theory </p> 

                </div>

            </div>
            </div>
        
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
                </div>

        
        </div>

  );
};

export default DAV