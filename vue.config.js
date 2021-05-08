module.exports = {
	configureWebpack: {
		output: {
			libraryExport: 'default'
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
			],
		},
	},
	// css: {
	// 	extract: false
	// },
};
