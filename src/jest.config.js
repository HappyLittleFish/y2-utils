"use strict";
module.exports = {
    // preset: 'ts-jest',
    coverageDirectory: "coverage",
    moduleFileExtensions: ['ts'],
    // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleDirectories: ['src'],
    preset: 'ts-jest/presets/default-esm',
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
