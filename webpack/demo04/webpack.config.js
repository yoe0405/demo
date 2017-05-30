
module.exports={
	entry:"./main.js",
	output:{
		filename:"build.js"
	},
	module:{
		loaders:[
			{test: /\.(png|jpg)$/,loader:"url-loader?limit=25000"}
		]
	}
}
