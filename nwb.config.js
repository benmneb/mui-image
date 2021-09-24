module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		umd: {
			global: 'MuiImage',
			externals: {
				react: 'React',
			},
		},
	},
};
