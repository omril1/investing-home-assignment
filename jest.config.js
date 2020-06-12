//@ts-check

/**@type {Partial<import('@jest/types').Config.InitialOptions>} */
const jestConfig = {
  verbose: true,
  moduleNameMapper: {
    '^.+\\.s?css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['./front-end/jest-setup.ts'],
  testRegex: '.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
};

module.exports = jestConfig;
