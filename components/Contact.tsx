import copy from '@util/copy';
import React, { FC } from 'react';
import { AOSComp, AOSProp } from './AOS';

interface fieldProps {
  link?: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  handler?: () => any;
  anim: AOSProp;
}
const ContactCont: FC = ({ children }) => (
  <>
    <AOSComp delay={150} anim="zoom-in">
      <h2 id="cont" className="contact_h mt-5">
        Contact Me
      </h2>
    </AOSComp>

    <div className="contact_me">{children}</div>
  </>
);

const Field: FC<fieldProps> = ({ link, icon, title, desc, handler, anim }) => (
  <AOSComp delay={anim.delay} anim={anim.anim}>
    <a onClick={handler ?? (() => {})} href={link ?? '#'} className="field">
      <div>
        <h5>
          {icon}
          {title}
        </h5>
        <p>{desc}</p>
      </div>
    </a>
  </AOSComp>
);

Field.defaultProps = {
  link: '#',
  handler: () => {},
};

const Contacts: FC = () => (
  <ContactCont>
    <Field
      title="E-Mail"
      icon={<i className="far fa-envelope pr-2" />}
      desc="rafsanamin2020@gmail.com"
      handler={() => copy('rafsanamin2020@gmail.com')}
      anim={{ delay: 50, anim: 'left-in' }}
    />

    <Field
      title="Discord Channel"
      icon={<i className="fab fa-discord pr-2" />}
      desc="Click to get invited"
      link="https://discord.gg/cMF7JEk4qB"
      anim={{ delay: 150, anim: 'bottom-in' }}
    />

    <Field
      title="Github"
      icon={<i className="fab fa-github pr-2" aria-hidden="true" />}
      desc="Click to go to my Github Repo."
      link="https://github.com/RafsanAmin"
      anim={{ delay: 250, anim: 'right-in' }}
    />
  </ContactCont>
);

export default Contacts;
