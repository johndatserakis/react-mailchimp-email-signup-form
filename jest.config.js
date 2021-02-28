module.exports = {
  moduleNameMapper: {
    "\\.(css|scss|jpg|png)$": "<rootDir>/test-utilities/jest-style-mock.ts"
  },
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: ['<rootDir>/test-utilities/jest-setup.ts'],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
