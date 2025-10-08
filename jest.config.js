/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  //estEnvironment: "node",
  testEnvironment: "allure-jest/node",
  preset: 'ts-jest',
  transform: { "^.+\.tsx?$": ["ts-jest",{}],},
  reporters: [
    'default',
    ['jest-junit', {outputDirectory: 'reports'}],
    ['jest-html-reporters', {publicPath: 'reports'}]
  ]
};