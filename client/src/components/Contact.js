import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Contact = () => {
  const [show, setShow] = useState(false);
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { name, email, subject, message } = formData;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const triggerBottom = (window.innerHeight / 3.5) * 2;
      const sectionTop = contactRef.current.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(formData);
    try {
      await axios.post('/send', body, config);
      alert('Email Sent Successfully...');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      alert('Sorry! The email was not sent, Please try again later...');
    }
  };

  return (
    <section className='contact'>
      <div className='container'>
        <div className='line' style={{ marginTop: '2.5rem' }}></div>
        <h1>
          <span>Contact Me</span>
        </h1>
        <p>
          Here you can contact me if you have any questions about my services
          and projects .
        </p>
        <form
          ref={contactRef}
          className={`form sections ${show && 'show'}`}
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name...'
              required
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email...'
              required
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='subject'>Subject :</label>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Enter Subject...'
              required
              value={subject}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Message :</label>
            <textarea
              name='message'
              placeholder='Enter Your Message...'
              required
              value={message}
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
          <button className='btn'>
            Send <i className='fa fa-paper-plane'></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
