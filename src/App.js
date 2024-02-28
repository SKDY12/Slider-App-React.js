import { useState } from 'react';
import './index.css';

function App() {

  const msg = ["Message-One", "Message-Two", "Message-Three"];
  
  const [pg, setpg] = useState(1);

  function previous(){
    setpg(pg - 1);
  }
  function next(){
    setpg(pg + 1);
  }
  return (
    <div className='page'>
      <div className='number'>
        <div id="p" className={ pg === 1 ? "active" : "" }>1</div>
        <div id="p" className={ pg === 2 ? "active" : "" }>2</div>
        <div id="p" className={ pg === 3 ? "active" : "" }>3</div>
      </div>
      <div className='message'>
        {msg[pg-1]}
      </div>
      <div className='buttons'>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
