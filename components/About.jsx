import React from 'react'

const About = () => {
  return (
    <div id = "about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-aut md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'> Who I am</h2>
                <p className='py-2 text-gray-600'>
                    JE SUIS SUR LE MARCHE mfvjbzefgpqhgioaepbiezgeufqhlmdjksbhgvofeqlzkumhqflijdksjslbkhdjpqfhlsvmdgkfjqmkjlbjdf
                </p>
                <p className=' py-2 text-gray-600'>
                    =lfvnaqôgiqhpefgudisfojdkspsojghbgjekdzajîgphzofijedfakzvjf^n
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects. 
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex iterms-center justify-center p-4 hover:scale-105 ease-in duration-300'> 
                <img className='rounded-xl' src="https://media.istockphoto.com/id/1347345879/photo/financial-rising-graph-and-chart-with-lines-and-numbers.jpg?s=1024x1024&w=is&k=20&c=bwSAIQ7fchgQiALKHp_LCPcAmIGBi6OXFjLZjclbVOo=" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About