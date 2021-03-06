const express = require('express')
const bodyParser= require('body-parser')
const cors= require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const {sequelize}= require('./models')


const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


sequelize.sync()
	.then(()=>{
		app.listen(config.PORT)
		console.log('server running at port', config.PORT)
	}
	)

