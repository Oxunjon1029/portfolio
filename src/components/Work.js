import React, { useState } from 'react';
import { buttons } from '../assets/constants/radioButton';
import { workCards } from '../assets/constants/workCards';
import filter from '../assets/functions/filter';
import { getItem } from '../assets/functions/localStorage';
import '../assets/styles/myService.css';
const Work = () => {
  const [worCards, setCards] = useState([...workCards]);
  let buttonId = getItem('buttonId');
  console.log(buttonId)
  return (
    <div className='myWork' id='work'>
      <div className='work'>
        <h1>my recent works.</h1>
      </div>
      <div className='workCentered'>
        <div className='workButtonCon'>
          {buttons?.map((button) => (
            <div
              onClick={() => filter(workCards, setCards, button.id)}
              className={
                button.id == buttonId
                  ? 'selectedButton'
                  : 'radioButton'
              }
              key={button.key}
              tabIndex={button.id}>
              {button.name}
            </div>
          ))}
        </div>
        <div className='workCardContainer'>
          {worCards?.map((card) => (
            <div
              key={card.key}
              className='workCard'
              data-aos-duration='2000'
              data-aos='zoom-in'>
              <img src={card.img} alt='error img' />
              <div className='nameClient' id='nameClientId'>
                <div className='workTitle'>{card.name}</div>
                <div>{card.client}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
