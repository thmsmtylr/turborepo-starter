module.exports = {
  roots: ["<rootDir>/components"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  testMatch: ["**/?(*.)+(test).tsx"],
  // **/?(*.)+(test).tsx
  // **/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
};
