import { createContext } from 'react';

const ResultContext = createContext({
  result: '',
  setResult: () => {},
});

export default ResultContext;
