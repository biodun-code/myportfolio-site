import React, { useEffect } from 'react'; // eslint-disable-next-line 
import { SiReact, SiCss3,SiHtml5 } from 'react-icons/si'; // eslint-disable-next-line 
import {IoLogoJavascript } from 'react-icons/io';
import { customAos } from '../../utils/customAos';

import '../styles/Hero.css';
import Para from '../common/Para';

const Hero = () => {

  useEffect(() => {
    if (window.visualViewport.width > 600) {
      customAos('pushLeftIcons', '.bLeft', -30)
      customAos('pushLeftIcons', '.tLeft', -30)
      customAos('pushRightIcons', '.bRight', -70)
      customAos('pushRightIcons', '.tRight', -70)
    }
  }, [])

  const heading = <h1 data-aos="fade-down" data-aos-duration="2000">Hello<br /> <span>I'm Toheeb<br />Abdullahi</span></h1>

  return (

    <div className='Hero'>
      <div className="left-col">
        <Para
          intro={'Introduction'}
          h1={heading}
          para={"I am a passionate front-end developer. I have a strong foundation in HTML, CSS, and JavaScript and I am constantly learning and exploring new technologies to enhance my skills. I have experience in developing responsive and user-friendly web interfaces using modern front-end frameworks such as React, Angular, and Vue. I also have experience in working with back-end technologies like Node.js and PHP to develop full-stack web applications.In addition to my technical skills, I am a detail-oriented and creative problem-solver who is committed to delivering high-quality work. I take pride in staying up-to-date with the latest trends and best practices in web development to ensure that my work is always of the highest standard. Feel free to take a look at my portfolio to see some of my latest projects and don't hesitate to get in touch if you think I could be a good fit for your project."}
          btnClass={'btn'}
          btn={'Contact Me'} 
          more={'mailto:biodunbio14@gmail.com'}/>
      </div>
      <div className="right-col">
        {/* <div className="ring"></div> */}
        <div className="person" data-aos="fade-up" data-aos-duration="1800"></div>
        {/* <div className="icon bLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiReact /></div>
        <div className="icon tLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiHtml5 /></div>
        <div className="icon tRight" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><IoLogoJavascript /></div>
        <div className="icon bRight" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiCss3 /></div> */}
      </div>
    </div>

  )
}

export default Hero