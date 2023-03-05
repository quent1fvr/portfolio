import React from 'react';
import Image from 'next/image';
import nutrition from 'public/assets/projects/nutrition.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import summary1 from "public/assets/projects/summary.png"
import info1 from "public/assets/projects/pates/poisson.png"
import graph from "public/assets/projects/graph.png"
import pb2 from "public/assets/projects/pb2.png"
import pb2desc from "public/assets/projects/pb2_description.png"
import pb3 from "public/assets/projects/pb3.png"
import pb3desc from "public/assets/projects/pb3desc.png"
const operation_research_nutrition = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={nutrition} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
                    <h2 className='py-2'> The perfect meal</h2>
                    <h3> MATLAB</h3>
                </div>
            </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='py-8 text-justify'>The challenge of this assignment is to develop a sports meal while minimizing the cost of the meal 
so that a student can use this model using operational research methods.</p>
                    <h2>Linear Programming problem</h2>
                    <p className='py-8 text-justify'>For this first problem, we will restrict our problem to two decision variables. This implies to restrict 
the number of available foods.So we will base ourselves on an important source of proteins: fish and an 
important source of carbohydrates: pasta</p>
                    <div className='flex justify-around'>
                    <Image src={summary1} height={600} width={500}></Image>
                    <Image src={info1} height={600} width={500}></Image>

                    </div>
                    <div className='flex justify-center py-2'>
                    <Image src={graph} height={600} width={500}></Image>
                    </div>
                    <p className='text-justify '> The problem was solved graphically and on matlab by the simplex method, we finally obtained that by eating 366.6 grams of pasta and 163.7g of meat, 
                    we respect all the necessary caloric and macronutrient constraints while minimizing the cost of the meal to £0.96. </p>

                    <h2>Mixed-integer Programming Problem</h2>
                    <p className='text-justify py-8'>To perform well, we consider in our lunch, the recommendations in vitamin C. We would like to 
consume the recommended daily dose in one meal. After research, some fruits contain a lot of vitamin C, 
especially apples and oranges. We want to eat at least one apple and one orange for this meal. We also add 
meat as a credible alternative to fish in terms of protein for variety. We even want to impose a minimum 
value of 80g on the meat.</p>
                    <div className='flex justify-around py-4'>
                    <Image src={pb2desc} height={600} width={500}></Image>
                    <Image src={pb2} height={600} width={500}></Image>

                    </div>
                    <p>We have obtained an optimal solution. By consuming 371.9 g of pasta, 110.2g of fish, 80g of meat, an 
apple and two oranges, we obtain a meal that respects all our constraints in terms of macronutrients, calories 
and vitamins for a meal cost of £2.3 per meal.</p>
                    <h2>Non linear Programming Problem</h2>
                    <p className='text-justify py-8'>Our problem is evolving, the fish is a victim of the crisis and inflation in the UK, the price no longer 
follows a linear law but evolves as follows and becomes very quickly more expensive than before</p>
                    <div className='flex justify-around py-4'>
                    <Image src={pb3desc} height={600} width={500}></Image>
                    <Image src={pb3} height={600} width={500}></Image>

                    </div>
                    <p>The optimal solution approximated by <span className="underline">genetic algorithm</span>is to consume 570 grams of pasta, 108 grams of fish, 0.10 grams of 
meat, one apple and two oranges per meal for a total cost of £2.1. </p>
                    <div className='flex justify-center'>
                    <button className='px-8 py-2 mt-4 mr-8'>Download report</button>
                    <button className='px-8 py-2 mt-4 '>Code</button>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-4'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                
                <div className='grid grid-cols-3 md:grid-cols-1'>
                   <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Matlab</p> 


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

export default operation_research_nutrition