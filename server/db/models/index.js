'use strict';
const Sequelize = require('sequelize');
const db = require('../index');

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

const Student = db.define('student', {
	firstName:{
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			notEmpty: true
		}
	},
	lastName:{
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			notEmpty: true
		}
	},
	email:{
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			isEmail: true,
			notEmpty: true
		}
	},
	gpa: {
		type: Sequelize.FLOAT,
		validate:{
			min:0.0,
			max: 4.0
		}
	},
	name:{
		type: Sequelize.VIRTUAL,
		get(){
		return this.getDataValue('firstName')+' '+this.getDataValue('lastName')
		}
	}
})

const Campus = db.define('campus', {
	name:{
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			notEmpty: true
		}
	},
	imageUrl:{
		type: Sequelize.STRING,
		defaultValue: '',
	},
	description: {type:Sequelize.TEXT}
})

// This is also probably a good place for you to set up your associations
Student.belongsTo(Campus);
Campus.hasMany(Student);


module.exports = {
	db,
	Student,
	Campus
}