import React from 'react';
import CV from '../img/ABDELLAH DAMRI CV.pdf';

const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='container'>
        <div>
          <h1 className='hero-text'>
            My Name is <span>ABDELLAH DAMRI</span> and I am a
            <span>Full Stack Developer</span>
          </h1>
          <div>
            <p>
              I would like to welcome you to my personal portfolio, as you can
              tell I am a passionate Web Developer who loves programming. You
              can check out my CV down below.
            </p>
            <a href={CV}>
              View CV &nbsp; <i className='fas fa-file-upload'></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
