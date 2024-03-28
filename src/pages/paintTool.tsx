import React from 'react';
import { Container } from '../styles/HomeStyle';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const paintTool: React.FC = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>ペイントツールを作った話</h1>
            <h2>使用技術</h2>
            <li>Java</li>
            <Footer />
        </Container>
    );
};

export default paintTool;