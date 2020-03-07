module.exports = {
  extends: 'plugin:@anansi/typescript',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  rules: {
    'no-console': ["error", { "allow": ['tron'] }],
  },
  "env": {
    "browser": true,
    "node": true
  }
}
