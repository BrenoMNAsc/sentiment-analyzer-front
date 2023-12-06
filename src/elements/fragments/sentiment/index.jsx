import React from 'react';
import './style.css';

export default function Sentiment(props) {
  const handleWave = (sentiment) => {
    switch (sentiment) {
      case 1:
        return <img className='wave blue animate' src='/sentiments/wave-good.svg' alt='Good Wave' />;
      case -1:
        return <img className='wave red animate' src='/sentiments/wave-bad.svg' alt='Bad Wave' />;
      case 0:
        return <></>;
      default:
        return null;
    }
  };

  const renderSentiment = (sentiment_) => {
    switch (sentiment_) {
      case 1:
        return <img className='good face' src='/sentiments/good.svg' alt='Good Face' />;
      case -1:
        return <img className='bad face' src='/sentiments/bad.svg' alt='Bad Face' />;
      case 0:
        return <img className='neutral face' src='/sentiments/default.svg' alt='Neutral Face' />;
      default:
        return null;
    }
  };

  return (
    <>
      <div id='emoji-mask'>
        {handleWave(props.wave)}
        {renderSentiment(props.sentiment)}
      </div>
    </>
  );
}
