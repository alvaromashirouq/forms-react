import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: namehasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameisValid,
    hasError: lastNamehasError,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastName
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailhasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && lastNameisValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(name, lastName, email);

    resetName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {namehasError && <p>must be not empty</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNamehasError && <p>must be not empty</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailhasError && <p>must be not empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
