import React, { useState, useEffect } from 'react';

const UpButton = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [animateUp, setAnimateUp] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollDown = window.scrollY;
      if (scrollDown >= 250) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
        setAnimateUp(false);
      }
    });
  }, []);
  const onClick = () => {
    setAnimateUp(true);
  };
  return (
    <a
      href='#navbar'
      className={`scroll-up ${scrollUp && 'showBtn'}  ${
        animateUp && 'onClick'
      }   `}
      onClick={onClick}
    >
      <i className='fas fa-arrow-up'></i>
    </a>
  );
};

export default UpButton;
