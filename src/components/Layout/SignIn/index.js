import React, { useState } from 'react';
import './index.css';

import EnhInput from '../../../common/components/EnhInput';
import * as validationRules from '../../../common/utils/validationRules';

import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    userName: {
      labelFor: 'InputEmail',
      labelValue: 'Username',
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-mail'
      },
      descriptionId: "emailHelp",
      description: "Please provide username (email)",
      value: '',
      validation: [
        validationRules.required,
        validationRules.isEmail,
      ],
      validationDescription: 'Should be non-blank, formatted as E-mail (john.doe@gmail.com)',
      valid: false,
      touched: false,
    },
    password: {
      labelFor: 'InputPassword',
      labelValue: 'Password',
      elementType: 'password',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: [
          validationRules.required,
          validationRules.minLength(8),
          validationRules.mustHaveCharsAndNumbers,
      ],
      validationDescription: 'Should be non-blank, at least 8 character long, include numbers and letters',
      valid: false,
      touched: false,
    }
  });

  const [formIsValid, setFormIsValid] = React.useState(false);

  const formElementsArray = [];

  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.currentUser);
  const isSigned = !!user; 
  const authRedirectPath = useSelector(state => state.authReducer.authRedirectPath);

  for (let key in signInForm) {
    formElementsArray.push({
      id: key,
      config: signInForm[key],
    });
  }

  const signInHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in signInForm) {
      formData[formElementIdentifier] = signInForm[formElementIdentifier].value;
    }
    console.log(formData);
    dispatch(authActions.auth(formData));
  };

  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedSignInForm = {...signInForm};
        const updatedSignInElement = { ...updatedSignInForm[inputIdentifier] };

        updatedSignInElement.value = event.target.value;
        updatedSignInElement.valid = validationRules.composeValidators(
          updatedSignInElement.value,
          updatedSignInElement.validation
          );
        updatedSignInElement.touched = true;
        updatedSignInForm[inputIdentifier] = updatedSignInElement;
        
        let validForm = true;
        for (let inputId in updatedSignInForm) {
            validForm = updatedSignInForm[inputId].valid && validForm;
        }
        setFormIsValid(validForm);
        setSignInForm(updatedSignInForm);
  };

  return (
    <React.Fragment>
      {isSigned ? <Redirect to={authRedirectPath}/> : null}
      <div className={"form-item container card bg-light mb-4 border-info"}>
        <div className={"card-header text-white bg-dark"}>
          <h5>Please sign in</h5>
        </div>
        <form onSubmit={signInHandler}>
          {formElementsArray.map(formElement => (
            <EnhInput
              key={formElement.id}
              labelFor= {formElement.config.labelFor}
              labelValue= {formElement.config.labelValue}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              descriptionId={formElement.config.descriptionId}
              description={formElement.config.description}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              validationDescription={formElement.config.validationDescription}
              shouldValidate={formElement.config.validation.length}
              touched={formElement.config.touched}
              changed={(event) => inputChangeHandler(event, formElement.id)}
            />
          ))}
          <button
            type="submit"
            className={"btn w-60 " + (formIsValid ? "btn-success" : "btn-danger")}
            disabled={!formIsValid}>
            Sign In
          </button>
        </form>
      </div>
    </React.Fragment>
  )}

export default SignIn;
