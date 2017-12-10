'use strict'
const express = require('express');
const apiRouter = require('express').Router()
const db = require('../db/models/index')
const Student = db.Student
const Campus = db.Campus

apiRouter.use('/student', require('./student'));
apiRouter.use('/campus', require('./campus'));

module.exports = apiRouter;
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

//------------------Campus Routes-------------------------

// apiRouter.get('/campus', (req,res,next)=>{
// 	Campus.findAll({
// 		include:[{model:Student}]
// 	})
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.param('id', (req,res,next,id)=>{ //campus middleware
// 	Campus.scope('students').findById(id)
// 	.then(campus=>{
// 		if(campus){
// 			req.campus = campus;
// 			next();
// 		}else{
// 			const error = new Error('Campus does not exist');
// 			error.status = 404;
// 			throw error;
// 		}
// 	})
// 	.catch(next);
// });

// apiRouter.get('/campus/:id', (req,res,next)=>{
// 		res.send(req.campus);
// })

// apiRouter.post('/campus', (req,res,next)=>{
// 	Campus.create(req.body)
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.put('/campus/:id', (req,res,next)=>{
// 	req.campus.update(req.body)
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.delete('/campus/:id', (req,res,next)=>{
// 	req.campus.destroy()
// 	.then(() => res.redirect('/campus'))
// 	.catch(next)
// })

// //  //------------------Student Routes-------------------------



// apiRouter.get('/student', (req,res,next)=>{
// 	Student.findAll({
// 		include:[{model:Campus}]
// 	})
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.param('id', (req,res,next,id)=>{
// 	Student.findById(id)
// 	.then(student => {
// 		if(student) {
// 			req.student = student;
// 			next();
// 		}else{
// 			const error = new Error('Student does not exist!');
// 			error.status = 404;
// 			throw error;
// 		}
// 	})
// 	.catch(next);
// });


// apiRouter.get('/student/:id', (req,res,next)=>{
	
// 		res.send(req.student);
// 	})

// apiRouter.post('/student', (req,res,next)=>{
// 	Student.create(req.body)
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.put('/student/:id', (req,res,next)=>{
// 	req.student.update(req.body)
// 	.then((result)=>{
// 		res.send(result)
// 	})
// 	.catch(next)
// })

// apiRouter.delete('/student/:id', (req,res,next)=>{
// 	Student.findById(req.params.id)
// 	.then(result=>result.destroy())
// 	.then(() => res.sendStatus(204))
// 	.catch(next)
// })