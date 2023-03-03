import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import drone_detection  from '../public/assets/projects/drone.jpeg'
import engines_failure from '../public/assets/projects/engines.jpeg'
import dav from '../public/assets/projects/dav.png'
import nutrition from '../public/assets/projects/nutrition.png'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id = "projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects</p>
            <h2 className='py-4'>What I have Built up</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem
                    title='Drone detection'
                    backgroundImg = {drone_detection}
                    projectUrl="/Drone_detection"
                 />
                <ProjectItem
                    title='Engine failure prediction '
                    backgroundImg = {engines_failure}
                    projectUrl="/Engine_failure_prediction"
                 />
                <ProjectItem
                    title='Graph study of the world airline network'
                    backgroundImg = {dav}
                    projectUrl="/DAV"
                 />
                <ProjectItem
                    title='The perfect meal'
                    backgroundImg = {nutrition}
                    projectUrl="/operation_research_nutrition"
                 />                                  
            </div>
        </div>


    </div>
  )
}

export default Projects