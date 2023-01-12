import React from 'react';
import { stats } from '../assets/constants/statElements';
import '../assets/styles/statistics.css';
const Statistics = () => {
  return (
    <div className='statistics'>
      <div className='backShadow'>
        {stats?.map((item) => (
          <div key={item.key} className='statElements'>
            <h1 data-aos="zoom-out-up">{item.number}</h1>
            <p data-aos="fade-up"
              data-aos-anchor-placement="center-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
