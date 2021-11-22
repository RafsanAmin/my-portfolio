import React, { FC } from 'react';
import baseUrl from 'utils/baseUrl';

const About: FC = () => {
  const age = new Date().getFullYear() - 2006;

  return (
    <div>
      <div id="abt" className="about_me">
        <div className="img">
          <img src={`${baseUrl}/img/profile.jpg`} alt="" />
        </div>
        <div className="texts">
          <h2>Hi 👋, I{"'"}m HRM Rafsan Amin</h2>
          <h4>A junior full-stack developer.</h4>
          <p>
            ❔❔❔
            <br />I live in Dhaka, Bangladesh. I am a {age} year old boy. I am learning Web
            Development and also I can edit Photos, videos etc. I am now focusing in Web Development
            more especially MERN Stack. You can see my web development skills and my projects below.
            <br /> ⚡ Fun fact <b>I started coding at 12</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
