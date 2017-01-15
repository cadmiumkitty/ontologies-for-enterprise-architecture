var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry : "./src/index.js",
	output : {
		path : '../../../target/generated-resources/static/',
		filename : "bundle.js"
	},
	module : {
		loaders : [
				{
					test : /\.css$/,
					loader : "style!css"
				},
				{
					test : /\.less$/,
					loader : "style!css!less"
				},
				{
					test : /\.(js)?$/,
					include : [ path.resolve(__dirname, "./src") ],
					loader : 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
				}
		]
	}
};
