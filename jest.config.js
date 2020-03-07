module.exports = {
  testEnvironment: "node",
  preset: "jest-expo",
  cache: false,
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__mocks__/globalMock.ts"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.ts|tsx$": "ts-jest"
  },
  moduleDirectories: ["src", "node_modules"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  }
};
