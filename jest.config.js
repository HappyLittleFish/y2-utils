module.exports = {
  transform: {
    '.(ts)': 'ts-jest'
  },
  testRegex: '/__test__/.*\\.(test|spec)\\.(ts)$',
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  // testEnvironment: "jsdom"
  // testEnvironment: "node",
  // globals: {
  //   'ts-jest': {
  //     useESM: true,
  //   },
  // },
};
