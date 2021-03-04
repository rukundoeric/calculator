import React from 'react';
import Display from './_display';
import ButtonPanel from './_buttonPanel';
import '../assets/css/style.css';

function App() {
  return (
    <div className="App">
      <div className="calc-container">
        <div className="calc-content">
          <table>
            <Display />
            <ButtonPanel />
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
