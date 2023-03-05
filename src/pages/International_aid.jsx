import React from 'react';
import Image from 'next/image';
import engineImage from 'public/assets/projects/engines.jpeg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import worldAid from 'public/assets/projects/international_aidd.jpeg'
import pcacountries from "paysACP.png"
import pca from "public/ACP.png"
import countriestofocus from "public/countriestofocus.png"
const International_aid = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={worldAid} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> Helping international aid decisions</h2>
                    <h3> Python , PCA, Clustering </h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='text-justify'>The purpose of this project is to analyze through several socio-economic indices
a list of 167 countries in order to determine which ones can benefit from humanitarian
humanitarian aid. 
<p>The aim is to perform an unsupervised classification of the observed data
observed through five clustering methods:
- The K-Means method
- The hierarchical ascending classification (HAC)
- The Gaussian mixture model
- DBSCAN
- Spectral partitioning.</p>

<p>To do this, we will make a comparative study of these methods before applying them to our
apply them to our data set. Then, thanks to our data partitioning, we will
choose a list of about ten countries to which we will grant the help in
assistance.</p>
To begin with, we will therefore study these five clustering methods on
different "control" datasets in order to determine their performance according to the dataset and
dataset and to find the most suitable one for our problem.</p>
<h2 className='py-8'>PCA</h2>
                    <div className='py-10 flex justify-center'>
                    <Image   src={pca} alt='/' height={700} width={600}/>
                    </div>
                    <div className='flex justify-center'>
                    <Image   src={pcacountries} alt='/' height={400} width={600}/>

                    </div>
<p className='py-4'>Global aid should focus on health infrastructure to limit child mortality, and also help
mortality, and also help them to develop economically through foreign direct investment (FDI)
foreign direct investment (FDI), for example from rich countries.</p>
<h2 className='py-8'>Clustering example</h2>
<div className='py-4 flex justify-center'>
                    <Image   src={countriestofocus} alt='/' height={400} width={600}/>
                    </div>
                    <p className='text-justify py-4'>Thanks to the different algorithms implemented in this study, we can
list the countries that are most in need of international aid. We rely on
mainly on the basis of PCA and Gaussian mixture (confirmed by K-means and Cah).
(confirmed by K-means and Cah).
In decreasing order of importance:
<p>First group: HAITI, NIGERIA, CHAD, CENTRAL AFRICA, MALI, SIERRA
LEONE, BURKINA FASO, NIGER, CONGO, BURKINA FASO.</p>
<p>Second group: MOZAMBIQUE, GUINEA, ZAMBIA, MALAWI,
AFGHANISTAN, CAMEROON, TANZANIA, UGANDA, BURUNDI, BENIN,
GAMBIA.</p>
These countries are most in need of international assistance. Thanks to the CPA, we know that we must
actions to fight against child mortality and thus improve the health system on the one hand, but
health system on the one hand, but also to help them to develop economically
economically via investments from NGOs or even the most developed countries so that these
developed countries </p>
                    <div className='flex justify-center'>
                    <button className='px-8 py-2 mt-4 '>Dowload Report</button>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p>  
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

export default International_aid