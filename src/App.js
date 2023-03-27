import { useState } from 'react';
import React from 'react';

import './App.css';
import ResultContext from './context/ResultContext';
import Button from './components/Button';
import Result from './components/Result';

const App = () => {
  const [result, setResult] = useState(0);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      <div>
        <div className="bit_calculator">
          <div className="bits">
            <Button text="128" value={128} />
            <Button text="64" value={64} />
            <Button text="32" value={32} />
            <Button text="16" value={16} />
            <Button text="8" value={8} />
            <Button text="4" value={4} />
            <Button text="2" value={2} />
            <Button text="1" value={1} />
          </div>
          <div>
            <Result />
          </div>
        </div>
      </div>
    </ResultContext.Provider>
  );
};

export default App;
