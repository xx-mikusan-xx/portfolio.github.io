// index.tsx
import React from 'react';
import { FaGithub, FaTwitter, FaReact, FaCode, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringsecurity } from "react-icons/si";
import { TbVirusSearch } from "react-icons/tb";
import { Container } from '../styles/HomeStyle';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Home: React.FC = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'TypeScript', icon: <FaCode /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'webSecurity', icon: <SiSpringsecurity /> },
    { name: 'malware analysis', icon: <TbVirusSearch /> }
  ];

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <section>
        <h2>About Me</h2>
        <p>
          しがない成人男性．<br />
          中学生の頃に某YouTuberの上げているPCにウイルスを入れる動画に魅入られセキュリティの世界へ． <br />
          「良いインターネット」を作ることを目標に脆弱性診断，マルウェア解析を行う．
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: miku71041@gmail.com</p>
      </section>

      <section>
        <h2>Connect with Me</h2>
        <div>
          <a href="https://github.com/xx-mikusan-xx" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/tamagodofu01" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Home;
