const Sequelize=require('sequelize')
const env=require('dotenv')
const conf=require('./conf')

env.config()
const sequelize=new Sequelize(conf.database,conf.username,conf.password,{
	dialect:'mysql',
	host:'localhost',
	operatorsAliases:false
})

module.exports=sequelize