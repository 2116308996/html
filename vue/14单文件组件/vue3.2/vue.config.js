module.exports={
	lintOnSaveL:false,
	devServer:{
		port:8789
	},
	
	chainWebpack:config=>{
	config.resolve.symlinks(true);
}
}
