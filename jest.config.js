module.exports = {
  transform: {
    ".(ts)": "ts-jest"
  },
  testRegex: "/__test__/.*\\.(test|spec)\\.(ts)$",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  // transform: {
  //   "^.+\\.(t|j)sx?$": "ts-jest"
  // },
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  // moduleFileExtensions: ["ts"]
  // preset: "ts-jest",
  // testEnvironment: "node",
  // preset: "ts-jest",
  // transform: { "^.+\\.ts?$": "ts-jest" },
  // moduleFileExtensions: ["ts"],
  // preset: 'ts-jest',
  // coverageDirectory: "coverage",
  // moduleFileExtensions: ['ts'],
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // moduleDirectories: ['__test__'],
  // preset: 'ts-jest/presets/js-with-ts', // or other ESM presets
  // preset: 'ts-jest/presets/default-esm', // or other ESM presets
  // globals: {
  //   'ts-jest': {
  //     useESM: true,
  //   },
  // },
  // moduleNameMapper: {
  //   '^(\\.{1,2}/.*)\\.js$': '$1',
  // },
}
