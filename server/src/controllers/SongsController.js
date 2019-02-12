const {Songs}= require('../models')
const Sequelize = require('sequelize')

module.exports={
	async post(req,res){
		try {
			const song= await Songs.create(req.body)
			res.send(song)
		} catch (error) {
			res.status(500).send({
				error: `An error occured ${error}`
			})
		}
	},
	async index(req,res){
		const Op= Sequelize.Op
		try {
			let songs= null
			if(req.query.search){
				songs= await Songs.findAll({
					where:{
						title:{
							[Op.like]:`%${req.query.search}%`
						}
					}
				})
			}
			else{
				songs= await Songs.findAll({
					limit: 10
				})
			}
			res.send(songs)    
		} catch (error) {
			console.log('Error',error)			
			res.status(500).send({
				error: `An error occured ${error}`
			})
		}
        
	},
	async show(req,res){
		try {
			const songId=req.params.songId
			const song= await Songs.find({
				where:{
					id:songId
				}
			})
			res.status(200).send(song)
		} catch (error) {
			
		}
	},
	async update(req,res){
		try {
			songId= req.params.songId
			const song= await Songs.update(req.body,{
				where:{
					id:songId
				}
			})
			console.log(`song updated: ${req.body}`)
			res.send(req.body)
		} catch (error) {
			console.log(error)
			res.status(500).send({
				error:`An error occured: ${error}`
			})
		}
	},
	async delete(req,res){
		try {
			const song= await Songs.destroy({
				where:{
					title:'null' 
				}
			})
			console.log('deleted',song)
			res.status(200).send({
				result:song
			})
		} catch (error) {
			console.log(error)
			res.status(404).send({
				error:error
			})
		}
	}
}