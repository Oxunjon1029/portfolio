import React from 'react';
import { Spin } from 'antd';
import '../assets/styles/loader.css';
const Loader = ({ loading }) => {
  return (
    <div className='loader'>
      <div className='loaderCentered'>
        <Spin size='large' spinning={loading} />
      </div>
    </div>
  );
};

export default Loader;
