const {User}= require('../models')
const jwt= require('jsonwebtoken')
const config= require('../config/config')
const bcrypt= require('bcrypt')

const jwtSignedUser = function (user){
	const ONE_WEEK = 60 * 60 * 24 * 7
	const secret= config.authentication.secret
	return jwt.sign(user,secret,{
		expiresIn: ONE_WEEK
	})
}

async function hashPassword (value){
	const hashedPassword=await new Promise(
		(resolve,reject)=>{
			bcrypt.hash(value,10,(err,hash)=>{
				if(err){
					console.log(`inside error ${err}`)
					reject(err)
				}
				else{
					console.log(`inside hash ${hash}`)
					resolve(hash)
				}	
			})
		}
	)
	return hashedPassword
}

async function comparePassword(password1,password2){
	const compareRresult = await new Promise((resolve,reject)=>{
		bcrypt.compare(password1,password2,(err,result)=>{
			if(err)
				reject(err)
			else
				resolve(result)
		})
	})
	return compareRresult
}

module.exports = {
	 async register (req,res) { 
		const {email, password} = req.body
		console.log(`body request is ${JSON.stringify(req.body)} `)
		const inputUser= {
			email: email,
			password: await hashPassword(password)
		}
		const user = User.create(inputUser).then((user)=>{
			res.status(200).send({
				user:user.toJSON()
			})
		}).catch((err)=>{
			res.status(400).send({
				error:'Email already exist!'
			})
		})
	},
	 async login(req,res){
		const {email,password} = req.body
		const user=  await User.findOne({
			where : {
				email: email
			}
		})
		if(!user){
			res.status(401).send({
				error: 'Invalid login information'
			})
		}
		else {
			await comparePassword(password,user.password).then((result)=>{
				if(result){
					res.status(200).send({
						user: user.toJSON(),
						token: jwtSignedUser(user.toJSON())
					})
				}
				else{
					res.status(401).send({
						error: 'Invalid Password',
					})
				}
			})
		}
	}
} 

