import React from 'react';
import Image from 'next/image';
import davImage from 'public/assets/projects/dav.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import aicapback from 'public/assets/projects/aicapback.png'
import agenda from 'public/assets/projects/AICAP/agenda.png'
import form from 'public/assets/projects/AICAP/Form.png'
import rdv from 'public/assets/projects/AICAP/rdv.png'
import static_ex from 'public/assets/projects/AICAP/static_example.png'



const AICAP_internship = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={aicapback} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Web developer internship in Spain </h2>
                    <h3> Laravel, PHP, MySQL, HTML,CSS</h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='py-8 text-justify'>AICAP is an agency that was founded in 1987. For more than 30 years, our agency has offered various programs 
                        for young people who want to discover another country, by studying or working, in order to learn a new language abroad. 
                        Through a personalized follow-up, 
                        AICAP will find the ideal program, among our services, that will satisfy your expectations and wishes.</p>
                    

                    <h2 className='py-4'> Creation of static web pages</h2>
                    <div className='flex justify-center items-center py-8 mx-auto'> 

                        <Image src={static_ex} alt='/' height="700" width="500"/>
                    </div>

                    <h2 className='py-8'>Form</h2>
                    <div className='py-8 flex justify-center' > 
                        <Image src={form} alt='/' height="700" width="500" />
                        </div>
                    <h2 className='py_8'>Calendar</h2>
                    <div>
                    <div className='flex justify-around py-8 ' > 

                        <Image src={agenda} alt='/' height="500" width="400" className='mr-4' />
                        <Image src={rdv} alt='/' height="500" width="400" className='mr-4' />
                    </div>

                    </div>
                    <h2 className='py-8'>Continious improvement, deployment</h2>
                    <p className='text-justify'>A work of continuous improvement of the site was undertaken throughout the internship as well as 
                        the deployment and maintenance of the site. </p>   

                    
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Laravel framework</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PHP</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> HMTL,CSS</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MySQL </p> 

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

export default AICAP_internship