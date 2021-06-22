import { useState , useEffect } from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>The Kittie Grid Generator</h1>
        <p>Using TypeScript</p>
      </header>
      <main>
        <form>
          <input type="number" id="inputWidth" required />
          <label htmlFor="inputWidth">px width</label>
          <input type="number" id="inputHeight" required />
          <label htmlFor="inputHeight">px height</label>
          <button>Generate</button>
        </form>
      </main>
    </div>
  );
}

export default App;
