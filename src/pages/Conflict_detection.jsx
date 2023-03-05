import React from 'react';
import Image from 'next/image';
import drone_image from '/public/assets/projects/GDP/demo.png'
import VGG_result from 'public/assets/projects/GDP/pose2.png'
import YOLO_result from 'public/assets/projects/GDP/poseestimation.png'

import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';


const Pose_estimation = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={drone_image} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Group project at Cranfield University </h2>
                    <h3> Pytorch, VITPOSE (state of the art) pose estimation model, CNN,LSTM classification, GIT versioning, Docker </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='text-justify py-8'>Airports are getting smarter  not just on the passenger side, but also on the maintenance and operations 
side. This is because operations are getting more complex, there are new threats from both humans and 
autonomous machines, and human operators are often working alongside robots in potentially safety-critical 
environments.
The group project  was to design, implement and test a system for the surveillance system (detection of multiple humans 
and related events) in a smart airport scenario. </p>
<p className='underline'>My team and I have decided to work on the development end to end of real time agressive behaviours detection </p>

<p className='py-8'>This project is currently in progress until April 11, the progress of the project is available on github. Details on this site will be provided once the project is completed.</p>

                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Pytorch</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>VITPOSE </p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CNN/LSTM</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Docker</p> 

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

export default Pose_estimation