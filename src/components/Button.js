import './Button.css';
import { useState, useContext } from 'react';
import ResultContext from '../context/ResultContext';

const Button = ({ value }) => {
  const { result, setResult } = useContext(ResultContext);

  let name = 'biton';
  const [isToggleOn, setIsToggleOn] = useState(false);

  const HandleClick = () => {
    setIsToggleOn(!isToggleOn);
    let tempCounter = result;
    if (isToggleOn) {
      setResult((tempCounter -= value));
    } else {
      setResult((tempCounter += value));
    }
  };
  isToggleOn ? (name = 'biton') : (name = 'bitoff');
  return (
    <>
      <button className={name} onClick={HandleClick}>
        {isToggleOn ? '1' : '0'}{' '}
      </button>
    </>
  );
};

export default Button;
