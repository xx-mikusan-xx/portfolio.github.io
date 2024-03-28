import React from 'react';
import { Container } from '../styles/HomeStyle';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const fridge: React.FC = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <h1>冷蔵庫の中身がわかるwebアプリを作った話</h1>
            <h2>使用技術</h2>
            <li>Next.js</li>
            <li>TypeScript</li>
            <Footer />
        </Container>
    );
};

export default fridge;