import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = e => {
    setIsTouched(true); // blur 이벤트 발생 = 이미 한 번 건드렸단 의미이므로
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false); // 초기화
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;