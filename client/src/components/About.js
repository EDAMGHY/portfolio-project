import React, { useEffect, useState, useRef } from 'react';
import me from '../img/me.jpeg';

const About = () => {
  const [show, setShow] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const triggerBottom = (window.innerHeight / 3.5) * 2;
      const sectionTop = imageRef.current.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <section className='about'>
      <div className='container'>
        <div>
          <div className='line'></div>
          <h1>
            <span>About Me</span>
          </h1>
          <p>
            I am a Fullstack Web developer and Computer Science Student with a
            passion for Design and Innovation. I build accessible and responsive
            sites. I work with ReactJS and NodeJS to accomplish this. I am
            currently aiming towards improving my full stack Javascript skills.
            I am a very curious person always willing to learn.
          </p>
        </div>
        <img
          src={me}
          ref={imageRef}
          className={`sections ${show && 'show'}`}
          alt='me'
        />
      </div>
    </section>
  );
};

export default About;
