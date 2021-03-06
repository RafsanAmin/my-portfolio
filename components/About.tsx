import baseUrl from '@util/baseUrl';
import React, { FC } from 'react';

const About: FC = () => {
  const age = new Date().getFullYear() - 2006;

  return (
    <div>
      <div id="abt" className="about_me">
        <div className="img">
          <img src={`${baseUrl}/img/profile.jpg`} alt="" />
        </div>
        <div className="texts">
          <h2> HRM Rafsan Amin ๐โโ๏ธ</h2>
          <h4>๐ป A junior full-stack developer.๐</h4>

          <p>
            <br />
            ๐งญ I live in <b>Dhaka, Bangladesh.</b>
            <br /> โ I am a <b>{age}</b> year old boy.
            <br />
            ๐ค I am learning <b>๐ Web Development</b> and also I can edit ๐ท <b>Photos</b>, ๐ฝ๏ธ{' '}
            <b>videos</b> etc.
            <br /> ๐คน๐ฝโโ๏ธ I am now focusing in <b>Web Development</b> more especially{' '}
            <b>MERN Stack and Next.js</b>.
            <br /> โฌ๏ธโฌ๏ธ You can see my web development skills and my projects below. โฌ๏ธโฌ๏ธ
            <br /> โก Fun fact <b>I started coding at 12</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
