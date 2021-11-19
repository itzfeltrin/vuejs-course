module.exports = {
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: ['error', 4],
        semi: 'off',
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        'vue/no-multiple-template-root': 'off',
    },
};
