import { useRef, useState } from 'react';
import clsx from 'clsx';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const nameInputref = useRef('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const onSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    const enteredValue = nameInputref.current.value;

    setEnteredName('');
  };

  const nameInputClasses = clsx(
    enteredNameIsValid ? 'form-control' : 'form-control invalid'
  );
  return (
    <form onSubmit={onSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputref}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
