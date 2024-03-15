// App.js
import React from 'react';
import './App.css';

interface AppState {
  name: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { name: 'about Satoru Konno' };
    // メソッドのthisをバインド
    this.handleClick = this.handleClick.bind(this);
  }
  
  // handleClickメソッドを定義してください
  handleClick(name: string){
    this.setState({name: name});
  }
  
  render() {
    return (
    	<div className="container">
    	  <h3>{this.state.name}</h3>
    	  <button onClick={() => {this.handleClick('30歳前半まで研究職をしており、主に生態系シミュレーションを中心に行ってました。その後エンジニアに転向して現在に至ります')}}>経歴</button>
        <button onClick={() => {this.handleClick('水産環境コンサル,AIコンサル,TOEIC(905)')}}>スキル</button>
      </div>
    );
  }
}

export default App;
