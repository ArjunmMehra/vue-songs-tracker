module.exports = {
	PORT :process.env.PORT || 8999,
	db:{
		database:process.env.DB_NAME || 'songstracker',
		username:process.env.DB_USER || 'songstracker',
		password:process.env.DB_PASSWORD || 'songstracker',
		options:{
			dialect: process.env.DIALECT || 'sqlite',
			host : process.env.HOST || 'localhost',
			storage: './songstracker.sqlite'
		}
	}
}