
module.exports={
	entry: __dirname+"/main.js",
	output: {
		path: __dirname+"/",
		filename: "build.js"
	},
	devServer: {
		contentBase: "./",  // 本地服务器所加载的页面所在目录
		host: "192.168.31.216",  // 本地ip
		colors: true,  // 终端输出结果为彩色
		historyApiFallback: true,  // 不跳转
		inline: true,  // 实时刷新
		port: "8088"  //  端口号
	}
}