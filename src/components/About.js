import React from 'react';
import me from '../assets/images/me.jpg';
import '../assets/styles/about.css';
const About = () => {
  return (
    <div className='about' id="info">
      <div className='aboutCenter'>
        <img className='aboutImg' src={me} alt='error img' />
        <div className='aboutText'>
          <h1>A BRIEF ABOUT ME.</h1>
          <h4>Full Stack Developer</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining
          </p>
          <a>Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
