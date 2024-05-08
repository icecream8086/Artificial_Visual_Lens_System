/* eslint-disable no-undef */
const { charts_dataChecker } = require('../model_check/charts_data');

describe('charts_dataChecker', () => {
  let dataChecker;

  beforeEach(() => {
    dataChecker = new charts_dataChecker();
  });

  test('pie_dataChecker should throw an error if the input data is not an array', () => {
    expect(() => {
      dataChecker.pie_dataChecker('invalid data');
    }).toThrow('The input data must be an array');
  });

  test('pie_dataChecker should throw an error if data elements do not have name and value attributes', () => {
    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1' }, { value: 10 }]);
    }).toThrow('Data elements 0 Must contain the name and value attributes');

    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1', value: 10 }, { name: 'Item 2' }]);
    }).toThrow('Data elements 1 Must contain the name and value attributes');
  });

  test('pie_dataChecker should throw an error if the value attribute is not a number', () => {
    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1', value: '10' }]);
    }).toThrow('Data elements 0 The value must be a number');

    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1', value: true }]);
    }).toThrow('Data elements 0 The value must be a number');
  });

  test('pie_dataChecker should not throw an error for valid input data', () => {
    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1', value: 10 }, { name: 'Item 2', value: 20 }]);
    }).not.toThrow();

    expect(() => {
      dataChecker.pie_dataChecker([{ name: 'Item 1', value: 10.5 }, { name: 'Item 2', value: 20.7 }]);
    }).not.toThrow();
  });
});