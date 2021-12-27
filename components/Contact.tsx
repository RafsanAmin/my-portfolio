import copy from '@util/copy';
import React, { FC } from 'react';

type fieldProps = {
  link?: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  handler?: () => any;
};
const ContactCont: FC = ({ children }) => (
  <>
    <h2 id="cont" className="contact_h mt-5">
      Contact Me
    </h2>
    <div className="contact_me">{children}</div>
  </>
);

const Field: FC<fieldProps> = ({ link, icon, title, desc, handler }) => (
  <div onClick={() => (handler ? handler() : window.open(link))} className="feild">
    <div>
      <h5>
        {icon}
        {title}
      </h5>
      <p>{desc}</p>
    </div>
  </div>
);
const Contacts: FC = () => (
  <ContactCont>
    <Field
      title="E-Mail"
      icon={<i className="far fa-envelope pr-2" />}
      desc="rafsanamin2020@gmail.com"
      handler={() => copy('rafsanamin2020@gmail.com')}
    />
    <Field
      title="Discord Channel"
      icon={<i className="fab fa-discord pr-2" />}
      desc="Click to get invited"
      link="https://discord.gg/cMF7JEk4qB"
    />
    <Field
      title="Github"
      icon={<i className="fab fa-github pr-2" aria-hidden="true" />}
      desc="Click to go to my Github Repo."
      link="https://github.com/RafsanAmin"
    />
  </ContactCont>
);

export default Contacts;
