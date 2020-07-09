//Inspired by react-final-form validation tips...

//Field value is required - mandatory for filling in.
export const required = value => value.trim !== '';

//Field value should be email-formatted, i.e. have @ and . symbols and some other characters at both sides of them.
export const isEmail = value =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    .test(value);

//Field value should have length equal to 'num' or above characters. 
export const minLength = num => value => value.length >= num;

//Field should have at least 1 letter character and 1 number.
export const mustHaveCharsAndNumbers = value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(value);

//Reduces multiple validators results for the single field
export const composeValidators = (value, [...validators]) =>
  validators.reduce((prev, validator) => prev && validator(value), true);
