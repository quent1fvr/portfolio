import React from 'react';
import Image from 'next/image';
import covid from 'public/assets/projects/COVID/covid-cells.jpg';
import exploration from 'public/assets/projects/COVID/exploration.png';
import results from 'public/assets/projects/COVID/final_results.png';
import exploration2 from 'public/assets/projects/COVID/exploration2.png';

import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const CovidDetection = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cov er' src={covid} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
          <h2 className='py-2'> COVID-19 Detection using 2D and 3D CNN</h2>
          <h3> Machine Learning, Deep Learning, Image Processing, Medical Imaging </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Abstract</h2>
          <p className='py-4 text-justify'>
          Computer vision techniques can be used for the analysis of images from medical sensors, for example to 
          sensors, for example to help in diagnosis and patient monitoring. of patients. The objective of this project
           was to propose a framework based on deep learning to automatically identify automatically identify lung 
           infections from lung X-rays. We used a database that provides database that provides complete radiologies
            of patients
         (healthy patients (healthy patient, patient suffering from pneumonia patient suffering from Covid-19).
         This project is part of my one-month course at IMT Nord Europe. 
          </p>
          <p> <span className='underline'>Keywords</span> : CNN / Machine Learning / Deep Learning / Image Processing / Medical Imaging
          </p>

          <h2 className='py-4'> Pre Processing / Data exploration</h2>
          <p className='py-4'>
          The dataset supplied is made up of sequences of scanners with different numbers of frames.
           A first exploration and visualization of the data was carried out before starting the machine
            learning part.
          </p>
          <div className="grid grid-cols-2 gap-4 py-8">
            <div className="aspect-w-16 aspect-h-9">
              <Image src={exploration} alt="/" className="object-cover m-auto ml-2 mr-1" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <Image src={exploration2} alt="/" className="object-cover m-auto ml-2 mr-1" />
            </div>
          </div>

          <h2 className='py-4'>Deep learning and Results</h2>

             <p className='py-4 text-justify'>
  Since we're working with sequences, we've tried several approaches to pre-processing and the deep learning model. 
  For normalization, all sequences were normalized with the same number of frames. Several methods were tried out 
  (Random deletion, SSIM deletion, adding black frames at the beginning, middle or end). 
  Then, each normalization method was coupled with a Deep Learning model: either a 2D CNN network +GRU or a 3D CNN network. 
  Here are the results we obtained. 
</p>
          <div className='flex justify-center items-center py-8'> 
                    <Image   src={results} alt='/' />
                    </div>
                    <div className="flex justify-center items-center">
                    <a href="https://github.com/quent1fvr/Infection_pulmonaire" target="_blank" rel="noopener noreferrer">
                    <button className='px-8 py-2 mt-4 mr-4'>Code</button>
                    </a>
                    </div>
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p> 
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TensorFlow</p> 
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Git</p> 
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CNN</p> 
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

export default CovidDetection;
