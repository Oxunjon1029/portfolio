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
            I'm a React/Node js full stack developer.<br/>
            I have about 2 years experience in React and 6 months in Node js.<br/>
            Additionally, I have some knowledge on React Native(Android/IOS)
          </p>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
