module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('Songs',
		{
			title: DataTypes.STRING,
			artist: DataTypes.STRING,
			genere: DataTypes.STRING,
			album: DataTypes.STRING,
			albumImageuUrl: DataTypes.STRING,
			youtubeId: DataTypes.STRING,
			lyrics: DataTypes.TEXT,
			tab:DataTypes.TEXT
		}
	)
}