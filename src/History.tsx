import React, { Component } from 'react';

interface HistoryState {
  name: string;
}

class History extends Component<{}, HistoryState> {
  constructor(props: {}) {
    super(props);
    this.state = { name: '今野について' };
    // メソッドのバインド
    this.handleClick = this.handleClick.bind(this);
  }
  
  // メソッドの型定義
  handleClick(name: string) {
    this.setState({ name: name });
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換え */}
        <center><button onClick={() => this.handleClick('宮城県沖や南極海の生態系の研究後、エンジニアに転身')}>経歴</button>
        {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換え */}
        <button onClick={() => this.handleClick('AI設計、API設計・開発、Python')}>スキル</button></center>
      </div>
    );
  }
}

export default History;
