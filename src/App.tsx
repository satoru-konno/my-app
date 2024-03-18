// App.tsx
import React from 'react';
import './App.css';
import Language from './Language';
import History from './History';


interface AppState {
  name: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { name: 'about Satoru Konno' };
  }
  
  render() {
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
      <div>
        {languageList.map((languageItem) => {
          return (
            <Language 
              langName={languageItem.langName}
              image={languageItem.image}
              introduction={languageItem.introduction}
            />
          )
        })}
        
        <History/>
      </div>
    );  
  }
}

export default App;
