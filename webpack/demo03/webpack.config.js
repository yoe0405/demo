
module.exports={
	entry: "./main.js", // 入口文件
	output:{
		filename:"build.js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style-loader!css-loader"}
		]
	}
}