import React from 'react';


import SkillCard from '../common/SkillCard';
import skills from '../../data/skills.json';
import Para from '../common/Para';

import cv from '../../assets/Copy of myresume.pdf'
import '../styles/Skills.css';


const Skills = () => {

  return (

    <div className='Skills'>
      <div className="right-col">
        <Para
          intro={'My Skills'}
          title={'Why Hire Me For Your Next Project?'}
          para={"With a comprehensive skill set in both front-end and back-end development, I offer a holistic approach to projects. I am adaptable, continuously learning, and committed to staying at the forefront of technology. Collaboration and communication are at the core of my work, ensuring your vision is translated into a successful reality. With a focus on user experience and a passion for delivering high-quality solutions, hiring me means gaining a dedicated partner who will go above and beyond to create exceptional digital experiences. Let's collaborate on your next project and achieve outstanding results together."}
          btn={'Download CV'}
          more={cv} />

      </div>
      <div className="left-col">
        {skills.map(skill => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title}
            desc={skill.desc} direction={skill.animation} />
        ))}
      </div>
    </div>

  )
}

export default Skills