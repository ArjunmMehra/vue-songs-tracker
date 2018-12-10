module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017
      },
   // "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};