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
          中学生の頃に某YouTuberの上げているPCにウイルスを入れる動画に(何故か)魅入られセキュリティの世界へ． <br />
          「良いインターネット」を作ることを目標に脆弱性診断，マルウェア解析をしています(勉強中ですが...)．
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
        <h2>works</h2>
        <h3>ペイントツール</h3>
        <p>Javaでペイントソフトを制作しました．</p>
        <a href='paintTool'>詳細</a>
        <h3>冷蔵庫の中身がわかんない！！！</h3>
        <p>冷蔵庫の中身がわかるwebsiteを制作しました．</p>
        <a href='paintTool'>詳細</a>
      </section>

      <section>
        <h2>compete</h2>
        <li>
          picoCTF2022
          <ul> 
            Global 2413/7794
          </ul>
        </li>
        <li>
          高専プロコン2022競技部門
        </li>
        <li>
          ICTSC2022
          <ul>
            RANK #11
          </ul>
        </li>
        <li>
          picoCTF2023
          <ul>
            Global 606/6923
          </ul>
        </li>
        <li>
          高専プロコン2023競技部門
        </li>
        <li>
          高専セキュリティコンテスト
          <ul>
            RANK #5
          </ul>
        </li>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: miku71041(あっと)gmail.com</p>
        <div>
          <a href="https://github.com/xx-mikusan-xx" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/junmaitei" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Home;
