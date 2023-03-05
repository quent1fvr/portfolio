import React from 'react'

import drone_detection  from 'public/assets/projects/ginkgo-3758236_1920.webp'
import engines_failure from 'public/engine_fail.jpeg'
import dav from 'public/assets/projects/airline_traffic.jpeg'
import nutrition from 'public/assets/projects/perfect_meall.jpeg'
import ProjectItem from './ProjectItem'
import Japhy from  'public/assets/projects/japhyy.png'
import PoseEstimation from 'public/vitpose.png'
import aicap from 'public/logo nuevo aicap texto azul.png'
import worldAid from 'public/assets/projects/international_aidd.jpeg'
function Projects() {
  return (
    <div id = "projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Internships / Projects</p>
            <h2 className='py-4'>What I have Built up</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
                    title='Internship Data Analyst Japhy'
                    techno = "MySQL, Tableau Desktop,Snowflake, Excel"
                    backgroundImg = {Japhy}
                    projectUrl="/Japhy_internship"
                 />         
            <ProjectItem
                 title='AICAP web developer intern'
                 techno = "Laravel,PHP, HTML,CSS"
                 backgroundImg = {aicap}
                 projectUrl="/AICAP_internship"
              />
                <ProjectItem
                    title='Conflict detection based on Pose Estimation + LSTM'
                    techno = "Pytorch, VITPOSE (state of the art) pose estimation, CNN,LSTM classification, GIT versioning, Docker"
                    backgroundImg = {PoseEstimation}
                    projectUrl="/Conflict_detection"
                 />
                <ProjectItem
                    title='Drone detection'
                    backgroundImg = {drone_detection}
                    projectUrl="/Drone_detection"
                    techno = "Tensorflow / Pytorch / YOLOV7/ VGG16 transfer learning"

                 />                 
                <ProjectItem
                    title='Engine failure prediction '
                    backgroundImg = {engines_failure}
                    projectUrl="/Engine_failure_prediction"
                    techno = "Python, Scikit Learn , popular ML algorithms"

                 />
                <ProjectItem
                    title='Graph study of the world airline network'
                    backgroundImg = {dav}
                    projectUrl="/DAV"
                    techno = "Python, NetworkX , Cartopy"

                 />
                <ProjectItem
                    title='The perfect meal'
                    backgroundImg = {nutrition}
                    projectUrl="/operation_research_nutrition"
                    techno = "Matlab, Operation research algorithms, Genetic algorithms"
                 />     
                    <ProjectItem
                    title='Helping international aid via ML'
                    backgroundImg = {worldAid}
                    projectUrl="/International_aid"
                    techno = "PCA, Clustering"
                 />                                
            </div>
        </div>


    </div>
  )
}

export default Projects