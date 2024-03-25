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
            <Footer />
        </Container>
    );
};

export default fridge;