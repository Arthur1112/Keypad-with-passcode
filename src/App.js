import { useState } from 'react';
import './App.css';


function App() {
  const [count,setCount] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const passWord = '98765';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Please Enter Login in Pin</h1>
        <h2>{isLoggedIn ? 'Pin Accepted, Welcome back Mr.Stark' : 'Try Again'}</h2>
          <h2 className='window'>{count}</h2>
      <body>
            <button className='row1' onClick={() => setCount(count + '1')}>1</button>
            <button className='row1' onClick={() => setCount(count + '2')}>2</button>
            <button className='row1' onClick={() => setCount(count + '3')}>3</button>
        <br/>
        <button className='row2' onClick={() => setCount(count + '4')}>4</button>
        <button className='row2' onClick={() => setCount(count + '5')}>5</button>
        <button className='row2' onClick={() => setCount(count + '6')}>6</button>
        <br/>
        <button className='row3' onClick={() => setCount(count + '7')}>7</button>
        <button className='row3' onClick={() => setCount(count + '8')}>8</button>
        <button className='row3' onClick={() => setCount(count + '9')}>9</button>
        <br/>
        <button className='clearButton' onClick={() => setCount('')}>🔄</button>
        <button className='row4' onClick={() => setCount(count + '0')}>0</button>
        <button className='row4' onClick={() => setIsLoggedIn(count === passWord)}>✅</button>
        <br/>
        <button className='row3' onClick={() => setCount(count.slice(0, -1))}>🔙</button>
        <br/>
        </body>
      </header>
    </div>
  );
}

export default App;
