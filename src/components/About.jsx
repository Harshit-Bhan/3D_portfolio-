import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../Constants';
import { fadeIn , textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title , index , icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full " >
      <motion.div variants={fadeIn("right","spring",0.5 * index , 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div options={
          {
            scale: 1,
            max:45,
            speed:450
          }
        }
        className='bg-tertiary  rounded-[20px] py-5 px-12 min-h-[280px[ flex justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title} className='w-16 h-16 objec-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>

        </div>
      </motion.div>

    </Tilt>  
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '>
        I'm a skilled software developer with expertise in HTML , CSS , JS , Node js , MongoDb , Oracle , SQL , and React. I have a strong passion for building scalable and efficient software solutions that meet the needs of diverse clients.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service,index) => (
              <ServiceCard key={service.title} index={index} {...service} />
                ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,"about");