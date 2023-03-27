import './Result.css';
import { useContext } from 'react';
import ResultContext from '../context/ResultContext';

const Result = () => {
  const { result } = useContext(ResultContext);
  return (
    <>
      <div className="result">{result}</div>
    </>
  );
};

export default Result;
