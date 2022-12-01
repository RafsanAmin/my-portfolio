import About from '@components/About';
import Channel from '@components/Channel';
import Contacts from '@components/Contact';
import Header from '@components/Hero';
import Navbar from '@components/Navbar';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import { NextPage } from 'next';

const index: NextPage = () => (
  <div style={{ overflowX: 'hidden' }}>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Channel />
    <Contacts />
  </div>
);

export default index;
