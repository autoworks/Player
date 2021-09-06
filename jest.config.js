module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['.stories.jsx', '/fixture/'],
  setupFiles: ['<rootDir>/config/jest/register-context.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|mobile-app|static|www|docs|node_modules|scripts)[/\\\\]'
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/file-transform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/mock/svg.js',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  coverageReporters: ['text'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
