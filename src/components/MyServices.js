import React from 'react';
import '../assets/styles/myService.css';
import { cards } from '../assets/constants/cardElements';

const MyServices = () => {

  return (
    <div className='myService'>
      <div className="service">
        <h1>my services are.</h1>
      </div>
      <div className='serviceCentered'>
        <div className='cardContainer'>
          {cards?.map((card) => (
            <div key={card.key} className='serviceCard' data-aos="flip-right"
              data-aos-duration="2000">
              <div className='iconCon' data-aos="zoom-in-up" data-aos-duration="2000">{card.icon}</div>
              <h2 className='serviceTitle'>{card.name}</h2>
              <div className="serviceContent">{card.info}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
