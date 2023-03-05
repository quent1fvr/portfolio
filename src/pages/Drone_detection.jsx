import React from 'react';
import Image from 'next/image';
import drone_image from '/public/assets/projects/drone.jpeg'
import VGG_result from 'public/assets/projects/VGG_result.png'
import YOLO_result from 'public/assets/projects/YOLO_result.png'

import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';


const Drone_detection = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={drone_image} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Drone Detection</h2>
                    <h3> Tensorflow, Pytorch , VGG16, YOLOV7, Transfer learning </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4 '>
                    <h2 className='py-8'>Overview</h2>
                    
                    <p className='text-justify'>I have been given a small dataset of images containing UAVs, along with labels 
                        specifying parameters for bounding box regression. As the dataset is too small
                         to train an object detector from scratch, my goal was to
                         fine-tune a pre-trained deep neural network to detect the position of UAVs in the images.
                    </p>

                    <h2 className='py-8'> First appoach VGG 16</h2>
                    <p className='text-justify'>
                         When transfer learning with VGG16, we will use the basic layers of VGG16 that are common to all images (such as filters for shape and texture features),
                          while adding new layers that are specific to drone recognition. We will then train this new model on a dataset including drone images so that it can learn to recognize these objects. 
                          This approach will allow us to take advantage of the power of VGG16 while adding new features for drone recognition.
                    </p>
                    <div className='flex justify-center items-center py-8'> 
                    <Image   src={VGG_result} alt='/' />
                    </div>
                    <h2 className='py-8'> Second  appoach YOLOV7 </h2>
                        
                    <p className='text-justify'> The advantage of YOLOv7 for drone recognition is its speed and accuracy. It can detect objects quickly and with very good accuracy, 
                    making it an ideal choice for real-time applications. In addition, by using deep learning,
                     YOLOv7 can adapt to different lighting conditions and drone shapes and sizes, further enhancing its suitability for this task.</p>
                     <div className='flex justify-center items-center py-8'> 

                     <Image src={YOLO_result} alt='/' />
                    </div>
                     <div className="flex justify-center items-center">
                    <a href="https://github.com/quent1fvr/Drone_detection" target="_blank" rel="noopener noreferrer">
                    <button className='px-8 py-2 mt-4 mr-4'>Code</button>
                    </a>
                    <Link href='../S383387DL.pdf' download target="_blank">
                    <button className='px-8 py-2 mt-4 ml-4 '>Download Report</button>
                    </Link>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tensorflow</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Pytorch</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>YOLO algorithm</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>VGG-16 transfer learning</p> 

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

export default Drone_detection