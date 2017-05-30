
var webpack=require("webpack");

module.exports={
	entry:__dirname+"/main.js", // node自带的项目根目录 绝对路径
	output:{
		path: __dirname+"",  // 绝对路径
		filename:"build.js"
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
	]
}
