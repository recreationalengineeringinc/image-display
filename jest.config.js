
module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['jsx', 'js'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {'enzymeAdapter': 'react16'},
  transform: {
    '\\.jsx$': 'babel-jest',
  }
};
