import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { contactElements } from '../assets/constants/contactEls';
import '../assets/styles/contact.css';
const Contact = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  return (
    <div className='myContact' id='contact'>
      <h2>get in touch</h2>
      <div className='contactCon'>
        <div className='contactInfoCon'>
          {contactElements.map((item) => (
            <div
              className='contactElCon'
              key={item.key}
              data-aos='flip-right'
              data-aos-duration='1000'>
              <div className='contactIcon'>{item.icon}</div>
              <div className='contactNamePlace'>
                <h2>{item.name}</h2>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='contactFormCon' style={{ width: '58%' }}>
          <Form onFinish={onFinish}>
            <Space  direction='vertical' style={{ width: '100%' }}>
              <Space
                wrap
                style={{ width: '100%', justifyContent: 'space-between' }}>
                <Form.Item>
                  <Input
                    style={{ width: '430px' }}
                    placeholder='Name'
                    name='username'
                    size='large'
                    className="nameInput"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    style={{ width: '430px' }}
                    placeholder='Email'
                    name='email'
                    size='large'
                    className="emailInput"
                  />
                </Form.Item>
              </Space>
            </Space>
            <Form.Item name='message'>
              <Input.TextArea
                size='large'
                style={{ height: '200px' }}
                placeholder='Your message'
              />
            </Form.Item>
            <Form.Item>
              <div className='contactSubmitBtn'>
                <Button
                  className='submitBtn'
                  shape='round'
                  type='primary'
                  htmlType='submit'>
                  Submit now
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
