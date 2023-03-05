import React from 'react';
import Image from 'next/image';
import engineImage from 'public/assets/projects/engines.jpeg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import engine from "public/assets/projects/engine_profil.png"
import result from "public/assets/projects/results_ssl.png"
import confusion_matrix from "public/assets/projects/confusionmatrix.png"

const Engine_failure_prediction = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={engineImage} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Engine failure prediction</h2>
                    <h3> Python, Scikit-learn, Numpy, Pandas, ML algorithms </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2 className="py-4">Overview</h2>
                    <p className=' text-justify'>Failure prediction is a major topic in predictive maintenance in many industries. Aircraft manufacturers, 
                        OEMs and end users are highly interested in prediction of component failures during the operation so that
                         they can plan maintenance operations and reduce losses due to the time aircraft has spent at the ground.</p>

                        <p className='text-justify py-2'> Monitoring of the engine health and current condition is based on sensor data analysis and telemetry from the
                         engine sub-systems. It is supposed to promote predictive maintenance by estimating either Time-To-Failure
                          (TTF) or Remaining Useful Life (RUL) for aircraft components that are currently in-service and may be fully
                        functional at the time of testing.</p>
                    <p className='text-justify'> <span className='underline'>The aim of the analysis is to enhance the maintenance operations</span> and planning of time-based preventive maintenance of
                         the aircraft engine. 
                        This was done by applying statistical learning methods: <span className='underline'>regression and classification</span>.</p>
                    <h2 className='py-8'>Regression challenge</h2>
                    <p className='text-justify'>The objective of this regression problem is to predict the Time To Failure (TTF) of aircraft 
engines based on a dataset composed of temporal data from sensors at different times. </p>
                    <div className='flex justify-around py-2'>
                    <Image   src={engine} alt='/' height={500} width={400}/>
                    <Image  src={result} alt='/' height={500} width={400}/>
                    </div>
                   <h2 className='py-8'>Classification challenge</h2>
                   <p>The challenge of the classification problem is to classify in a binary way whether the engine is 
failing at a given state.</p>
                    <div className='py-10 flex justify-center'>
                    <Image   src={confusion_matrix} alt='/' height={700} width={600}/>
                    </div>
                    <div className='flex justify-center py-8'>
                        
                    <button className='px-8 py-2 mt-4 mr-8'>Download report</button>
                    <button className='px-8 py-2 mt-4 '>Code</button>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Scikit-learn</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Numpy/Pandas</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>ML algorithms</p> 

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

export default Engine_failure_prediction