module.exports = {
    root: true,
    extends: ['@nuxt/eslint-config'],
    rules: {
        'vue/multi-word-component-names': 0,
        'vue/singleline-html-element-content-newline': 0,
        'sort-imports': ['error', { ignoreCase: true }],
        'vue/html-indent': 0,
        'vue/html-quotes': ['error', 'double'],
        indent: ['error', 4],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'only-multiline'],
        'space-before-function-paren': 0,
        'import/named': 0,
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/no-multiple-template-root': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-self-closing': 0,
        'vue/html-closing-bracket-newline': 0,
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
