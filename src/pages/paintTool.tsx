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
            <h2>実装した機能</h2>
            <li>指定したペン等でキャンパス内に描画する，描画したものを消去する</li>
            <li>ペンの色を変更する</li>
            <li>キャンパス内をpngとして保存する機能</li>
            <li>画像を読み込む機能</li>
            <h2>参考画像</h2>
            <p>準備ちう</p>
            <h2>実装予定の機能</h2>
            <li>undo，redo機能</li>
            <li>バケツツール</li>
            <li>キャンパス内の拡大，縮小機能</li>
            <li>レイヤー機能</li>
            <h2>GithubURL</h2>
            <p>準備ちう</p>
            <Footer />
        </Container>
    );
};

export default paintTool;