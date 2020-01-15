module.exports.clone=async function clone(repo,desc){
	const {promisify} =require('util')
	const download=promisify(require('download-git-repo'))
	const ora=require('ora')
	const process=ora(`下载项目${repo}`)
	process.start()
	try{
		await download(repo,desc)
	}catch(error){
		process.fail()
	}
	process.succeed()
}