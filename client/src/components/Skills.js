import React, { useEffect, useState, useRef } from 'react';
import skills from '../skills';

const Skills = () => {
  const [show, setShow] = useState(false);
  const skillsRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const triggerBottom = (window.innerHeight / 3.5) * 2;
      const sectionTop = skillsRef.current.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <section className='skills'>
      <div className='container'>
        <div className='line' style={{ marginTop: '2.5rem' }}></div>
        <h1>
          <span>Skills</span>
        </h1>
        <p>
          Here you can find all of the technologies and utilities I work with.
        </p>
        <div
          ref={skillsRef}
          className={`skills-container sections ${show && 'show'}`}
        >
          <div className='skills-images'>
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.skill}
                title={skill.skill}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
