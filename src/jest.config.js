export const testEnvironment = "jsdom";
export const setupFilesAfterEnv = ["@testing-library/jest-dom/extend-expect"];
export const transform = {
  "^.+\\.js$": "babel-jest",
};
