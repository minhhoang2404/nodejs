const newsRouter = require('./news')
const sitesRouter = require('./site')
const courseRouter = require('./course')

function route(app) {
    app.use('/course',courseRouter)
    app.use('/news',newsRouter)
    app.use('/',sitesRouter)


}

module.exports = route;
