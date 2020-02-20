import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  console.log(useEffect)

  useEffect(() => {
    document.title = `Current count: ${count}`
    let id = setTimeout(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearTimeout(id)
  }, [count, todos])

  return (
    <div className="App">
     <h1>Counter App</h1>
  <h2>{count}</h2>
     <button onClick={() => setCount(count + 1)}>+</button>
     <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
