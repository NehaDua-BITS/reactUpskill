//var webpack = require("webpack");   not required
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist"); //distribution dir; will be created auto
var SRC_DIR = path.resolve(__dirname, "src"); //dir having source code

//webpack config object
var config = {
	entry: SRC_DIR + "/app/index.js", //entry point of application
	output: {
		path: DIST_DIR + "/app",   //path for final bundled app
		filename: "bundle.js",   // final app name
		publicPath: "/app/"   //public path on server for app
	},
	module: { //modules required for transpiling
		loaders: [   //array of loaders; specifying only one for babel
			{
				test: /\.js?/,  //means look for or test all js files
				include: SRC_DIR, //where to find these js files
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"] //what all mentioned in dev dependencies
				}
			}
		]
	}
};


module.exports=config;


					
