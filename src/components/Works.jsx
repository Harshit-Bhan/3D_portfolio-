import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../Constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1.05, // Reduced scale for better UI
      speed: 450
    }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px] bg-gray-800 rounded-lg'>
        <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
        
        {/* Source Code Button (Fixed size and styles) */}
        <div className='absolute inset-0 flex justify-end m-3'>
          <div 
            onClick={() => window.open(source_code_Link, "_blank")} 
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt="GitHub" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
      <div className='mt-5'>
      <h3 className="text-white text-[24px] font-bold mt-4">{name}</h3>
      <p className="text-secondary text-sm mt-2 text-[14px]">{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => {
          return <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        })}
      </div>
      
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience in web development through real-world projects. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
