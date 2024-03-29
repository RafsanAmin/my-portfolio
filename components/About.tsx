import baseUrl from '@util/baseUrl';
import { FC } from 'react';
import { AOSComp as Animate } from './AOS';

const About: FC = () => {
  const age = Math.floor(
    (new Date().valueOf() - new Date('10/13/2006').valueOf()) / 1000 / 60 / 60 / 24 / 365
  );

  return (
    <Animate anim="left-in" delay={0} duration={1750}>
      <div>
        <div id="abt" className="about_me">
          <div className="img">
            <img src={`${baseUrl}/img/profile.jpg`} alt="" />
          </div>
          <div className="texts">
            <h2> HRM Rafsan Amin 🙋‍♂️</h2>
            <h4>💻 A junior full-stack developer.🌐</h4>
            <p>
              <br />
              🧭 I live in <b>Dhaka, Bangladesh.</b>
              <br /> ⌛ I am a <b>{age}</b> year old boy.
              <br />
              🤓 I am learning <b>🌐 Web Development</b> and also I can edit 📷 <b>Photos</b>, 📽️{' '}
              <b>videos</b> etc.
              <br /> 🤹🏽‍♂️ I am now focusing in <b>Web Development</b> more especially{' '}
              <b>MERN Stack and Next.js</b>.
              <br /> ⬇️⬇️ You can see my web development skills and my projects below. ⬇️⬇️
              <br /> ⚡ Fun fact <b>I started coding at 12</b>
            </p>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default About;
