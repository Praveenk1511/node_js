import { useState } from 'react'
import './App.css' 

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
    <h1>Full stack</h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map((joke, index) => {
           <div id={joke.id}>
             <h3>joke.title</h3>
             <p>joke.content</p>
           </div>
      })
    }
    </>
  )
}

export default App
