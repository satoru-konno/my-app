import React from 'react';
import './App.css';
import Language from './Language';
import History from './History';
import Navbar from './Navbar';
import Footer from './Footer';
import Top from './Top'; // Top コンポーネントをインポート
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Link をインポート

const LanguageComponent: React.FC = () => {
  const languageList = [
    {
      langName: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      introduction: 'railsやlaravelといった案件で基礎的なHTMLのデザインは抑えております',
    },
    {
      langName: 'Sass',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
      introduction: 'railsやlaravelといった案件でスタイルシートの応用で経験があります',
    },
    {
      langName: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      introduction: 'AI関連やrailsの案件でajax通信を使用する際に実装しました',
    },
    {
      langName: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      introduction: '今後の案件に備えて現在キャッチアップしております',
    },
  ];

  return (
    <>
      {languageList.map((languageItem) => (
        <Language
          key={languageItem.langName}
          langName={languageItem.langName}
          image={languageItem.image}
          introduction={languageItem.introduction}
        />
      ))}
    </>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Top />} /> {/* デフォルトのトップページ */}
          <Route path="/skill" element={<LanguageComponent />} />
          <Route path="/history" element={<History />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
  );  
}

export default App;
