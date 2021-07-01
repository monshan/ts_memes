import { useState , useEffect, FC } from 'react';
import { getMemes } from '../calls';
import { Display } from '../Display/Display';
import './App.css';

const App:FC = () => {
  const [memeImg, setMemeImg] = useState('');

  const randomNumber = (max: number) => {
    return (Math.floor(Math.random() * max));
  }

  const newMeme = () => {
    getMemes()
      .then(res => {
        const randomIdx = randomNumber(res.data.memes.length);
        setMemeImg(res.data.memes[randomIdx].url);
      })
  }

  return (
    <div className="App">
      <header>
        <h1>The Kittie Grid Generator</h1>
        <p>Using TypeScript</p>
      </header>
      <main>
        <button onClick={() => newMeme()}>Give me a meme</button>
        {memeImg && <Display imgSrc={memeImg}/>}
      </main>
    </div>
  );
}

export default App;
