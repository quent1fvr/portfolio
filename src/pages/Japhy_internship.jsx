import React from 'react';
import Image from 'next/image';
import DashR from 'public/assets/projects/Dash_revenu.png'
import DashG from 'public/assets/projects/dashG.png'
import DashS from 'public/assets/projects/DashSales.png'
import DashW from 'public/assets/projects/DashWinback.png'
import japhy from 'public/assets/projects/DAV_projects/japphy.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';


const Japhy_internship = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={japhy} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Interniship BI Data Analyst</h2>
                    <h3> Data Analysis, Data Engineering , Data Vizualisation </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Abstract</h2>
                    <p className='py-4 text-justify'>
                    Japhy is a start-up established since 2018 in the dog and cat food market that
works more generally for animal welfare in France.
From the word of the founders: "We created Japhy to simplify the daily life of all
dog and cat parents and to allow everyone to benefit from a healthy, natural diet
adapted to their profile."
My mission as a Data Analyst Intern is to ensure the implementation of
Dashboards for the different departments, to be the data point of contact for the launch
of projects, to carry out analyses in the customer database, to use and make
exploitable all data sources.
This report presents the context of this internship within Japhy, the different
objectives set, the steps and reports of the different missions I was given. Finally, I will
present a reflection on the various engineering assets and the evolution of my
professional project.</p>
<p> <span className='underline'>Keywords</span> : Data Analysis / Data engineering /Data Visualization Dashboards /
KPI/ Excel / Snowflake / Tableau Software
                    </p>

                    <h2 className='py-4'> Dashboard creations</h2>
                    <p className='py-4'>
                    A big part of my internship was focused on creating Dashboards to 
                    monitor Japhy's performance in real time. Here are some examples of 
                    creations with Tableau Desktop software.
                    </p>
                    <div className="grid grid-cols-2 gap-4 py-8">
  <div className="aspect-w-16 aspect-h-9">
    <Image src={DashG} alt="/" className="object-cover m-auto ml-2 mr-1" />
  </div>
  <div className="aspect-w-16 aspect-h-9">
    <Image src={DashR} alt="/" className="object-cover m-auto mr-2 ml-1" />
  </div>
  <div className="aspect-w-16 aspect-h-9">
    <Image src={DashS} alt="/" className="object-cover m-auto ml-2 mr-1" />
  </div>
  <div className="aspect-w-16 aspect-h-9">
    <Image src={DashW} alt="/" className="object-cover m-auto mr-2 ml-1" />
  </div>
</div>


                     <h2 className='py-4'> Data Engineering missions</h2>
                        <p>The other part was focused on Data Engineering missions on the company's Snowflake data warehouse: view development, automation through SQL cron development, creation of new tables, integration of new data sources.</p>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Snowflake</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tableau Desktop</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Excel</p> 
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MySQL</p> 

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

export default Japhy_internship