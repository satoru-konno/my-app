// Language.tsx
import React from 'react';

interface LanguageProps {
  langName: string;
  image: string;
}

class Language extends React.Component<LanguageProps> {
  render() {
    return (
      <div className='language-item'>
        <div className='language-name'>{this.props.langName}</div>
        <img 
          className='language-image' 
          src={this.props.image} 
          alt={this.props.langName} 
        />
      </div>
    );
  }
}

export default Language;
