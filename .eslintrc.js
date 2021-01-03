module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/attributes-order': 'error',
		'vue/block-tag-newline': 'error',
		'vue/component-definition-name-casing': 'error',
		'vue/component-name-in-template-casing': 'error',
		'vue/component-tags-order': 'error',
		'vue/custom-event-name-casing': 'error',
		'vue/html-closing-bracket-newline': 'error',
		'vue/html-indent': 'error',
		'vue/order-in-components': 'error',
		'vue/padding-line-between-blocks': 'error',
		'vue/multiline-html-element-content-newline': 'error',
		'vue/singleline-html-element-content-newline': 'error',
		'no-tabs': 0,
		indent: ['error', 'tab'],
	},
};
