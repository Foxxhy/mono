/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['@stylistic/stylelint-plugin'],
    ignoreFiles: ['dist/**', 'node_modules/**'],
    rules: {
        '@stylistic/indentation': 4,
    },
};
