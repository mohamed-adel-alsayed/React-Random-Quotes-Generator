import { useState } from 'react';
import './App.css';
import Quote from './Quote';

function App() {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };
  let buttonText = "";
  if (showQuote) {
    buttonText = "Clear Quote";
  }
  else {
    buttonText = "Generate Quote";
  }
  return (
    <div className='main-div'>
      <h1 id='header'>Random Quotes Generator</h1>
      <button id='generation-button' onClick={toggleQuote}>{buttonText}</button>
      {showQuote && <Quote />}
    </div>
  );
}

export default App;
