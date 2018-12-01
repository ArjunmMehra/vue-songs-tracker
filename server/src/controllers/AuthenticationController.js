const {User}= require('../models')

module.exports = {
	  register (req,res) { 
		const user =   User.create(req.body).then((user)=>{
			res.send(user.toJSON())
		}).catch((err)=>{
			res.status(400).send(err)
		})
	}
}