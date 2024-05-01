const express = require('express');
const cors = require('cors');
// ...otros imports...

const app = express();

app.use(cors()); // Añade el middleware CORS

// ...resto de tu código...
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {

    const sql = 'SELECT * FROM actividades_universidad';

    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de la tabla Usuario.' });
            throw error;
        }

        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    const { nombre_actividad, columna_foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad } = req.body;
    const { id } = req.params;

    // No es necesario crear un Buffer ni convertirlo a base64
    const foto = columna_foto;

    const sql = 'UPDATE actividades_universidad SET nombre_actividad = ?, columna_foto = ?, descripcion = ?, fecha = ?, Usuario_id_usuario = ?, tipo_actividad_id_tipo_actividad = ? WHERE id_actividad = ?';
    connection.query(sql, [nombre_actividad, foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad, id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).send(error);
            return;
        }
        res.send({ message: 'Actividad modificada correctamente' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM actividades_universidad WHERE id_actividad = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.send({ message: 'Actividad eliminada correctamente' });
    });
});

router.post('/create', (req, res) => {
    const { nombre_actividad, columna_foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad } = req.body;


    const sql = 'INSERT INTO actividades_universidad (nombre_actividad, columna_foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nombre_actividad, columna_foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad], (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).send(error);
            return;
        }
        res.send({ message: 'Actividad creada correctamente', id: results.insertId });
    });
});

router.get('/tipo-actividad', (req, res) => {
    const sql = 'SELECT * FROM tipo_actividad';

    connection.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de la tabla tipo_actividad.' });
            return;
        }

        res.json(results);
    });
});

module.exports = router;