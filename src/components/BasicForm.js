import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
// 컴포넌트 재평가, 재실행 될 때마다 새로 만들어질 필요 없는 함수이므로 따로 정의

const BasicForm = (props) => {
  // First Name
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  // Last Name
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  // Email
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(firstNameValue, lastNameValue, emailValue);

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
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameValue} />
          {firstNameInputHasError && (
            <p className='error-text'>Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameValue} />
          {lastNameInputHasError && (
            <p className='error-text'>Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue} />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
};

export default BasicForm;