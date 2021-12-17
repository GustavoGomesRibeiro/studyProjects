module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.json"
      }
    },
    preset: 'ts-jest',
      transform: {
    '^.+\\.tsx?$': 'ts-jest',
    },
    coverageDirectory: "__test__/coverage",
    collectCoverage: true,
    collectCoverageFrom: ['src/**'],
    coverageThreshold: {
      global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
      },
    },
    testMatch: ["**/*.spec.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],
    clearMocks: true,
    testEnvironment: "node",
    bail: true,
    testURL: "http://localhost/"
    //verbose: false,
  };