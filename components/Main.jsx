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
                    <p className='uppercase text-sm tracking-widest text-gray-700 '>vive la france
                    </p>
                    <h1 className='py-4 text-gray-700'>
                    Hi, Im  <span className='text-teal-600 '>Quentin</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                     Machine Learning Engineer / Data Scientist / Quantitative analyst
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a junior machine learning engineer. I have a Masters degree in Computer Science in France and a
                     master of Science in Artificial Intelligence in the UK and have completed various machine learning and data science courses. I have experience with several programming languages such as
                  Python,Java, C++ and I am proficient in using various machine learning libraries and frameworks such as TensorFlow, Keras, Pytorch,
                  Pycaret and Scikit-learn. I am also familiar with big data technologies such as Hadoop and Spark.
                  My portfolio includes projects such as image classification, natural language processing, and predictive modeling. 
                  I am excited to continue learning and expanding my skillset in the field of machine learning
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