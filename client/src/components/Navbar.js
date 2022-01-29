import React from 'react';

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar'>
      <div className='container'>
        <a href='/'>
          <h1 className='logo'>AD</h1>
        </a>
        <ul className='nav'>
          <li>
            <a
              href='https://github.com/EDAMGHY'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/abdellah-damri'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
