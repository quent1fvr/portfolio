import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Main =()=>{
    return (
        <div id = "home" className='w-full h-screen text-center'>
            <div className='maw-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-700 '>Let's build something together
                    </p>
                    <h1 className='py-4 text-gray-700'>
                    Hi, Im  <span className='text-teal-600 '>Quentin</span>
                    </h1> 
                    <h1 className='py-2 text-gray-700'>
                     Machine Learning Engineer / Data Scientist / Quantitative analyst
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a French student in Master of Science Applied Artificial Intelligence at Cranfield University in the UK. I am here in double degree with my French engineering school (equivalent Msc). I will graduate in August 2023 and I am listening to any proposal worldwide. 
        I have experience with several programming languages such as Python,Java, C++ and I am proficient in using various machine learning libraries and frameworks such as TensorFlow, Keras, Pytorch, Pycaret and Scikit-learn.I am excited to continue learning and expanding my skillset in any sector of activity.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/quentin-fever-7866001bb/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn/>
                        </a>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/quent1fvr" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        </div>
                        <div id="mail" className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <ReactTooltip
                            anchorId="mail"
                            place="bottom"
                            content="quentin.fever@etu.imt-nord-europe.fr"
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main 
