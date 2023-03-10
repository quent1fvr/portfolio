import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Contact = () => {
  return (
    
    <div id ="contact" className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'> Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
{/* left */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full '>
        <div>
            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2974&q=80" width={400} height={400} alt="" />
        </div>
        <div>
            <h2 className='py-2'>Quentin Fever</h2>
            <p > Machine learning Enginner</p>
            <p className='py-4'>I am available for a Junior full time position from August/September 2023. Contact me and lets talk.</p>
        </div>

 <div>
    <p className='uppercase pt-8' >Connect With me</p>
    <div className='flex items-center justify-between py-4'>
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
        <div id ="mail" className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail/>


        </div>
        <ReactTooltip anchorId='mail' place="bottom" content="quentinfever@icloud.com"/>

    </div>
 </div>   
</div>
</div>

{/* right */}
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form action='https://getform.io/f/53f46fe1-df96-4edd-ad38-ce93e4085c64' method='POST'>

                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='Name' />
                    </div>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='Phone'/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'name='Email' />

                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'name='Subject' />

                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='Message'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send message</button>
            </form>
           </div>
         </div>
       </div>
       <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />

            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Contact