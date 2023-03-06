import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Quentin from "public/quentin.png";
import Image from 'next/image';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center py-4 ">
      <div className='max-w-screen-xl w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700 mt-20'>Hi, I'm <span className='text-teal-600'>Quentin</span></h1>
          <h1 className='py-2 text-gray-700'>Machine Learning Engineer / Data Scientist / Quantitative analyst</h1>
          <p className='py-4 text-gray-600 max-w-[70%] mx-auto'>
            I am a French student in Master of Science Applied Artificial Intelligence at Cranfield University in the UK. I am here in double degree with my French engineering school (equivalent Msc). I will graduate in August 2023 and I am listening to any proposal worldwide. 
            I have experience with several programming languages such as Python, Java, C++ and I am proficient in using various machine learning libraries and frameworks such as TensorFlow, Keras, Pytorch, Pycaret and Scikit-learn. I am excited to continue learning and expanding my skillset in any sector of activity.
          </p>

          <div className='flex flex-row items-center justify-between max-w-[330px] mx-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.linkedin.com/in/quentin-fever-7866001bb/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='text-xl' />
              </a>
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://github.com/quent1fvr" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-xl' />
              </a>
            </div>
            <div id="mail" className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
