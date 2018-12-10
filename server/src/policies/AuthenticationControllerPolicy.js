const joi= require('joi')

module.exports = {
	register (req,res,next){
		const schema= {
			email: joi.string().email(),
			password: joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			) 
		}
		const {error,value}= joi.validate(req.body, schema)
		if(error){
			switch (error.details[0].context.key){
			case 'email':
				res.status(400).send({
					error: 'Please enter a valid email'
				})
				break
			case 'password':
				res.status(400).send({
					error: `Password validation failed due to following reasons:
                    </br>
                    1: Password must be lower case alphabet, uppercase alphabet or number only.
                    </br>
                    2: Password length should be between 8 to 32.
                    `
				})
				break
			default:
				res.status(400).send({ 
					error: 'invalid registration details'
				})

			}
		}
		else
			next()
	}
}