import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isEmailPatternValid, setIsEmailPatternValid] = useState(false);

  const [password, setPassword] = useState("");
  const [
    isLowercaseLetterPatternValid,
    setIsLowercaseLetterPatternValid,
  ] = useState(false);
  const [
    isUppercaseLetterPatternValid,
    setIsUppercaseLetterPatternValid,
  ] = useState(false);
  const [isNumbersPatternValid, setIsNumbersPatternValid] = useState(false);
  const [
    isPasswordLengthPatternValid,
    setIsPasswordLengthPatternValid,
  ] = useState(false);

  const onEmailHandler = function (event) {
    const emailValue = event.target.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    setEmail(emailValue);
    setIsEmailPatternValid(emailPattern.test(emailValue));
  };

  const onPasswordHandler = function (event) {
    const passwordValue = event.target.value;
    const lowercaseLetterPattern = /[a-z]/;
    const uppercaseLetterPattern = /[A-Z]/;
    const numbersPattern = /[0-9]/;

    setPassword(passwordValue);
    setIsLowercaseLetterPatternValid(
      lowercaseLetterPattern.test(passwordValue)
    );
    setIsUppercaseLetterPatternValid(
      uppercaseLetterPattern.test(passwordValue)
    );
    setIsNumbersPatternValid(numbersPattern.test(passwordValue));
    setIsPasswordLengthPatternValid(passwordValue.length >= 8);
  };

  return (
    <div>
      <h1>Validate your Form</h1>
      <label htmlFor="email">E-Mail</label>
      <input type="text" id="email" value={email} onChange={onEmailHandler} />

      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordHandler}
      />
      <br />
      <h3>E-Mail Validation must contain the following:</h3>
      <ul>
        <li className={isEmailPatternValid ? "valid" : "invalid"}>Is valid</li>
      </ul>

      <h3>Password must contain the following:</h3>
      <ul>
        <li
          id="lowercase"
          className={isLowercaseLetterPatternValid ? "valid" : "invalid"}
        >
          A <b>lowercase</b> letter
        </li>
        <li
          id="uppercase"
          className={isUppercaseLetterPatternValid ? "valid" : "invalid"}
        >
          A <b>capital (uppercase)</b> letter
        </li>
        <li id="number" className={isNumbersPatternValid ? "valid" : "invalid"}>
          A <b>number</b>
        </li>
        <li
          id="minChars"
          className={isPasswordLengthPatternValid ? "valid" : "invalid"}
        >
          Minimum <b>8 characters</b>
        </li>
      </ul>

      <button
        type="submit"
        id="submitButton"
        disabled={
          !(
            isLowercaseLetterPatternValid &&
            isUppercaseLetterPatternValid &&
            isNumbersPatternValid &&
            isPasswordLengthPatternValid &&
            isEmailPatternValid
          )
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;
