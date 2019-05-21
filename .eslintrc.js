module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
         "eslint:recommended"
        ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'no-unused-vars': [
            'off'
        ],
        'no-console': [
            'off'
        ],
        'quotes': [
            'error',
            'double'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};