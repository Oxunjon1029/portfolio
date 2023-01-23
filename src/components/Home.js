import React from 'react';
import me from '../assets/images/me.jpg';
import '../assets/styles/home.css';

const Home = () => {
  
  return (
    <div className='home' id='home'>
      <div className='imgContainer'>
        <img src={me} alt='error img' />
      </div>
      <div className='texts'>
        <h1>Mr Okhunjon Abdusalomov</h1>
        <h3 id="homeContent">...</h3>
      </div>
    </div>
  );
};

export default Home;
