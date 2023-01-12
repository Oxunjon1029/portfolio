import React from 'react';
import { experienceCards } from '../assets/constants/experienceCards';
import '../assets/styles/myService.css';
const Experience = () => {
  return (
    <div className='myExperience' id="resume">
      <div className='experience'>
        <h1>experience.</h1>
      </div>
      <div className='experienceCentered'>
        <div className='experienceCardContainer'>
          {experienceCards?.map((card) => (
            <div
              key={card.key}
              className='experienceCard'
              data-aos='flip-right'
              data-aos-duration='2000'>
              <div className='namePlaceYearCon'>
                <div className='namePlaceCon'>
                  <h4 className='experienceTitle'>{card.name}</h4>
                  <div className='yearCon'>{card.period}</div>
                </div>
                <p>{card.place}</p>
              </div>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
