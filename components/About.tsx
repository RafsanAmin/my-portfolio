import React, { FC } from 'react';
import baseUrl from 'utils/baseUrl';

const About: FC = () => {
  return (
    <div>
      <div id="abt" className="about_me">
        <div className="img">
          <img src={`${baseUrl}/img/profile.jpg`} alt="" />
        </div>
        <div className="texts">
          <h2>Who am I?</h2>
          <p>
            I am HRM Rafsan Amin. I live in Dhaka, Bangladesh. I am a 16 year old boy. I am learning
            Web Development and also I can edit Photos, videos etc. I am now focusing in Web
            Development more especially MERN Stack. You can see my web development skills and my
            projects below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
