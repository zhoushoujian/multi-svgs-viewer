module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint-config-ts-base"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "chrome": true,
    "$": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "createDefaultProgram": true,
  },
  "rules": {
    //  0 = off, 1 = warn, 2 = error
    "no-console": 0,
    "react-hooks/exhaustive-deps": 0
  }
}
