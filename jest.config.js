module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "test.tsconfig.json"
    }
  },
  "transform": {
    ".ts": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "<rootDir>/src/**/*.spec.ts"
  ],
  "collectCoverage": true,
  "coverageReporters": ["text-summary"],
  "collectCoverageFrom": [
    "**/*.ts", "!**/node_modules/**", "!**/*.d.ts"
  ],
  "silent": false,
  "moduleFileExtensions": [
    "ts", "js"
  ]
}