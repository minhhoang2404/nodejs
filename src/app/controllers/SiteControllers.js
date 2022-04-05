const course = require('../models/Course')

    async function home(req,res,next)  {
        course.find({})
        .then(course => res.json(course))
        .catch(next)
    }
   
    async function search(req,res)  {
        res.send("search");
    }
module.exports = {home,search};
