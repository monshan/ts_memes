import { useState , useEffect, FC } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
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
        <h1>A Meme Generator</h1>
        <p>Using TypeScript</p>
        <nav>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/generator" className="nav-link">Generator</NavLink>
          <NavLink to="/saved_memes" className="nav-link">Saved Memes</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <p>Welcome, click around to get started</p>
          </Route>
          <Route path="/generator">
            <button onClick={() => newMeme()}>Give me a meme</button>
            {memeImg && <Display imgSrc={memeImg}/>}
          </Route>
          <Route path="/saved_memes"></Route>
          <Route path="*">
            <p>Dead page</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
