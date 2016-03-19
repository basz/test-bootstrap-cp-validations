import Ember from 'ember';
import {
  validator,
  buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
  displayName: {
    debounce: 280,
    validators: [
      validator('presence', {presence: true})
    ]
  },
  emailAddress: {
    debounce: 280,
    validators: [
      validator('presence', {presence: true})
    ]
  },
  password: {
    debounce: 280,
    validators: [
      validator('presence', {presence: true}),
    ]
  },

  /**
   * Properties with with two validators are problematic
   */
  passwordConfirmation: {
    debounce: 280,
    validators: [
      validator('presence', {presence: true}),
      validator('confirmation', {
        on: 'password',
        message: 'Passwords do not match'
      })
    ]
  }
});

export default Ember.Object.extend(Validations, {
  displayName: '',
  emailAddress: '',
  password: '',
  passwordConfirmation: ''
});
