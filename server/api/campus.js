const apiRouter = require('express').Router()
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')

//------------------Campus Routes-------------------------

apiRouter.get('/', (req,res,next)=>{
	Campus.findAll({
		include:[{model:Student}]
	})
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.param('id', (req,res,next,id)=>{ //campus middleware
	Campus.scope('students').findById(id)
	.then(campus=>{
		if(campus){
			req.campus = campus;
			next();
		}else{
			const error = new Error('Campus does not exist');
			error.status = 404;
			throw error;
		}
	})
	.catch(next);
});

apiRouter.get('/:id', (req,res,next)=>{
		res.send(req.campus);
})

apiRouter.post('/', (req,res,next)=>{
	Campus.create(req.body)
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.put('/:id', (req,res,next)=>{
	req.campus.update(req.body)
	.then((result)=>{
		res.send(result)
	})
	.catch(next)
})

apiRouter.delete('/:id', (req,res,next)=>{
	req.campus.destroy()
	.then(() => res.sendStatus(204))
	//.then(() => res.redirect('/'))
	.catch(next)
})
module.exports = apiRouter;