module.exports = (app) => {

    app.get('/bicicleta',
        (req, res, next) => {
            next()
        },
        (req, res) => {
            res.send({
                mensaje:'venzo vulcan'
            })
        })


};