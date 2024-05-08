/* eslint-disable no-undef */
const { StyleChecker } = require('../model_check/style');

describe('StyleChecker', () => {
  let styleChecker;

  beforeEach(() => {
    styleChecker = new StyleChecker();
  });

  test('validate_cssDimensions should throw an error for invalid CSS dimensions', () => {
    expect(() => {
      styleChecker.validate_cssDimensions('10', '20');
    }).toThrow('Invalid CSS dimensions');

    expect(() => {
      styleChecker.validate_cssDimensions('10px', '20em');
    }).toThrow('CSS dimensions must have the same units');

    expect(() => {
      styleChecker.validate_cssDimensions('10%', '20cm');
    }).toThrow('CSS dimensions must have the same units');

    // Add more test cases for different invalid CSS dimensions
  });

  test('validate_cssDimensions should not throw an error for valid CSS dimensions', () => {
    expect(() => {
      styleChecker.validate_cssDimensions('10px', '20px');
    }).not.toThrow();
    expect(() => {
      styleChecker.validate_cssDimensions('100%', '50%');
    }).not.toThrow();

    expect(() => {
      styleChecker.validate_cssDimensions('2em', '3em');
    }).not.toThrow();
    // Add more test cases for different valid CSS dimensions
  });
});