import React from 'react';
import { Carousel } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { carouselElements } from '../assets/constants/carouselElements';
import '../assets/styles/testimonial.css';
const Testimonial = () => {
  return (
    <div className='testimonial' id="testimonial">
      <h2>what clients saying!</h2>
      <Carousel autoplay dots={false}>
        {carouselElements.map((item) => (
          <div className='testimonialCarouselEl'>
            <MessageOutlined className='testimonialCarouselIcon' />
            <p>{item.content}</p>
            <div className='nameProf'>
              <h2>{item.name}</h2>
              <h3>{item.profession}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
