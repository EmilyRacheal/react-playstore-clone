import { useState } from 'react';
import Navbar from './components/NavBar/navbar'
import "./index.css"
import './App.css';

const App = () =>{
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App;
