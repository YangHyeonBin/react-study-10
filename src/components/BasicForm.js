import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // First Name
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '');

  // Last Name
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '');

  // Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetFirstNameInput(); // 실행하라
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';

  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  // 위 세 코드 반복되는데 간략화할 방법은?

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={firstNameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input type='text' id='name' onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} />
        {firstNameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input type='text' id='name' onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
        {lastNameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
};

export default BasicForm;