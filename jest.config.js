/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tools/jestSetup.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.{ts,tsx}'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
};
