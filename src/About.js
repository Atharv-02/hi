import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section className='about-us'>
        <div className='main-vision'>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            ipsa, necessitatibus dolorum sint dicta aliquid deserunt tempore,
            cumque fugit asperiores quas. Exercitationem optio enim dicta
            corporis repudiandae sunt, amet iste mollitia explicabo nihil
            cupiditate totam repellat voluptas. Ullam, nulla corporis!
          </p>
        </div>
        <div className='team'>
          <div className='team-member'>
            <div className='member-img'>
              <img src='./images/IMG_3102.jpg' alt='' />
            </div>
            <div className='member-info'>
              <h4>Atharv Gulati</h4>
            </div>
          </div>
          <div className='team-member'>
            <div className='member-img'>
              <img src='./images/IMG_3102.jpg' alt='' />
            </div>
            <div className='member-info'>
              <h4>Charchit Kumawat</h4>
            </div>
          </div>
          <div className='team-member'>
            <div className='member-img'>
              <img src='./images/IMG_3102.jpg' alt='' />
            </div>
            <div className='member-info'>
              <h4>Ankit Gupta</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
