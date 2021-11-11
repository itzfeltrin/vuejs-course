module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/essential', 'standard'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['warn', 4],
        semi: 'off',
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        'vue/no-multiple-template-root': 'off',
    },
};
