import './App.css';
import FileUploader from './elements/fragments/fileuploader';
import Textfield from './elements/components/textfield';
import Sentiment from './elements/fragments/sentiment';
import { useState } from 'react';

function App() {
  const [wave, setWave] = useState(0);
  const [sentiment, setSentiment] = useState(0);

  const handleSentiment = (sentimentValue) => {
    setWave(sentimentValue);

    setTimeout(() => {
      setSentiment(sentimentValue);
    }, 500);
  };

  return (
    <div id="bg-home">
      <Textfield handleSentiment={handleSentiment} />
      <FileUploader />
      <Sentiment
        wave={wave}
        sentiment={sentiment}
      />
      <p style={{position:'fixed', bottom:10, right:20, fontWeight:700}}>MANDACARU.DEV</p>
      <p style={{position:'fixed', bottom:10, left:20, fontWeight:700}}>TIME #6</p>
    </div>
  );
}

export default App;