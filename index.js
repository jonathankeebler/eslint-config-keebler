module.exports = { 
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    "extends": ["airbnb-base"],
    rules: {
        "indent": ["error", "tab"],
        "no-tabs": 0,
        allowAllPropertiesOnSameLine: 0,
        camelcase: 0,
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        quotes: ["error", "double", { "allowTemplateLiterals": true }],
        "no-console": 0,
        radix: 0,
        "no-plusplus": 0,
        "no-unused-vars": 0,
        "max-len": 0,
        "import/prefer-default-export": 0,
    },
};