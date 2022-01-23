import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [show, setShow] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const triggerBottom = (window.innerHeight / 3.5) * 2;
      const sectionTop = projectsRef.current.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <section className='projects'>
      <div className='container'>
        <div className='line' style={{ marginTop: '2.5rem' }}></div>
        <h1>
          <span>Projects</span>
        </h1>
        <p>
          Here you can find all of my projects and Now I am working on some cool
          projects stay tuned for more!
        </p>
        <div
          ref={projectsRef}
          className={`page-content sections ${show && 'show'}`}
        >
          <div className='card'>
            <div className='content'>
              <h2 className='title'>Assassin's Creed API</h2>
              <p className='copy'>
                Check out THE Assassin's Creed API is a simple API that provides
                to you all of the main Assassin's Creed Games in details (NodeJS
                / ReactJS)
              </p>
              <a
                href='https://react-assassins-creed.herokuapp.com/'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                View Project
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2 className='title'>Pizza Builder</h2>
              <p className='copy'>
                Here you can build your pizza using the builder with the
                ingredients provided. (ReactJS)
              </p>
              <a
                href='https://simple-pizza-app.netlify.app/'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                View Project
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2 className='title'>Articles Listing</h2>
              <p className='copy'>
                A Test Project to list and Search for Articles (ReactJS)
              </p>
              <a
                href='https://github.com/EDAMGHY/listing-articles'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                View Source Code
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2 className='title'>Location Tracker Mobile App</h2>
              <p className='copy'>
                A Realtime Location Tracker App using The Google Maps API and
                storing the location information in Firebase Realtime Database (
                Java / Android Studio )
              </p>
              <a
                href='https://github.com/EDAMGHY/googleMapApp'
                target='_blank'
                rel='noreferrer'
                className='btn'
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
