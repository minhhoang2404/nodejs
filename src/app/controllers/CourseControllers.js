const course = require('../models/Course')
   
    async function show(req,res,next)  {
        course.findOne({slug : req.params.slug})
        .then(course => res.json(course))
        .catch(next)
    }

    async function create(req,res,next)  {
        res.send("create")
    }
module.exports = {show,create};
