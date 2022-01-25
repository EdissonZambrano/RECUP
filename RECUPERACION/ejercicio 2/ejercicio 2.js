const conexion = require('./cone_base_datos')

module.exports = app => {
    const connect = conexion

    app.post('/registrar_vehiculo', (req, res) => {
        const codigo = req.body.codigo
        const descripcion = req.body.descripcion
        const marca = req.body.marca
        const modelo = req.body.modelo
        const año = req.body.año

        connect.query(`INSERT INTO vehiculo VALUES(?, ?, ?, ?, ?)`, [codigo, descripcion, marca, modelo, año],
        (error, resultado) => {
            res.redirect('/index');
        })
    })
}