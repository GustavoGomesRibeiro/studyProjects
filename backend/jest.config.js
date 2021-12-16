module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
      "ts-jest": {
        tsConfigFile: "tsconfig.json"
      }
    },
    testMatch: ["**/*.spec.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],
    verbose: true,
    bail: true,
    testURL: "http://localhost/"
  };