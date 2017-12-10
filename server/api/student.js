const apiRouter = require('express').Router()
const db = require('../db/models/index')
const Student = db.Student


//------------------Student Routes-------------------------


apiRouter.get('/', (req,res,next)=>{
	Student.findAll({
		include:[{model:Campus}]
	})
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.param('id', (req,res,next,id)=>{
	Student.findById(id)
	.then(student => {
		if(student) {
			req.student = student;
			next();
		}else{
			const error = new Error('Student does not exist!');
			error.status = 404;
			throw error;
		}
	})
	.catch(next);
});


apiRouter.get('/:id', (req,res,next)=>{
	
		res.send(req.student);
	})

apiRouter.post('/', (req,res,next)=>{
	Student.create(req.body)
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.put('/:id', (req,res,next)=>{
	req.student.update(req.body)
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.delete('/:id', (req,res,next)=>{
	Student.findById(req.params.id)
	.then(result=>result.destroy())
	.then(() => res.sendStatus(204))
	.catch(next)
})
module.exports = apiRouter;