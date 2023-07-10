import { useEffect, useState } from 'react';
import './App.css'



function App() {
  const [number, setNumber] = useState(0);
  const rise = () =>{
    setNumber(number + 1)
  }
  const down = () =>{
    setNumber(number - 1)
  }
  return (
    <div className="App">
      <h1>wellcome</h1>
      <button onClick={rise}> + </button>
      <h1>{number}</h1>
      <button onClick={down}> - </button>

    </div>


  );
}

export default App;
