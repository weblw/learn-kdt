module.exports.clone=async function(repo,desc){
	const {promisify}=require('util')
	const download=promisify(require('download-git-repo'))
	const ora=require('ora')
	const process=ora(`下载......${repo}`)
	process.start()
	try{
		await download(repo,desc)
	}catch(err){
		console.log(err)
		process.fail()
	}	
	process.succeed()
}