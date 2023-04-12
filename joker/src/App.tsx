import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {jokes} from "./jokes";

function App() {
  const [joke, setJoke] = useState(jokes[0])

    const randomJoke = () => {
      const random = jokes.at(Math.round(Math.random() * jokes.length));
      setJoke(random || '');
    }

  return (
    <div className="App">
      <h1>Make fun of frontend devs</h1>
      <div className="card">
          <div style={{marginBottom: '20px'}}>
              {joke}
          </div>
        <button onClick={() => randomJoke()}>
          Random
        </button>
      </div>
    </div>
  )
}

export default App
