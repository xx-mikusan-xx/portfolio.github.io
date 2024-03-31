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
            <h2>実装した機能</h2>
            <li>メイン画面より，買った食品の手動登録機能</li>
            <li>冷蔵庫の中身を表として表示する機能</li>
            <li>消費済み食品一覧表示画面</li>
            <li>画像認識を用いたバーコードの読み取りの導入</li>
            <h2>参考画像</h2>
            <p>準備ちう</p>
            <h2>実装予定の機能</h2>
            <li>ログイン機能を導入してサービスを開始させる</li>
            <li>読み取ったバーコードから商品名を取得，自動で購入済み食品リストに追加</li>
            <h2>GithubURL</h2>
            <p>準備ちう</p>
            <Footer />
        </Container>
    );
};

export default fridge;