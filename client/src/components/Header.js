import React from 'react';
import EnglishCV from '../img/cvs/ABDELLAH DAMRI CV ENG.pdf';
import FrenchCV from '../img/cvs/ABDELLAH DAMRI CV FR.pdf';

const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='container'>
        <div className='hero-container'>
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
            <div className='cvs'>
              <a href={FrenchCV}>
                View CV <small>(Fr)</small> &nbsp;
                <i className='fas fa-file-upload'></i>
              </a>
              <a href={EnglishCV}>
                View CV <small>(Eng)</small> &nbsp;
                <i className='fas fa-file-upload'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
