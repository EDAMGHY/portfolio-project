import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <h1>
          <span>ABDELLAH DAMRI</span> <big>&copy;</big> 2022
        </h1>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/abdell_ed'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://twitter.com/damriabdellah'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
