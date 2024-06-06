const express = require('express');
const router = express.Router();
const connection = require('../db'); // Asegúrate de que esta ruta es correcta

// Obtener todos los postgrados
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM PostGrado';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los postgrados.' });
        } else {
            res.json(results);
        }
    });
});

// Crear un nuevo postgrado
router.post('/create', (req, res) => {
    const { tipo, titulo, fecha, area, requisitos, descripcion, columna_foto } = req.body;
    const sql = 'INSERT INTO PostGrado (tipo, titulo, fecha, area, requisitos, descripcion, columna_foto) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [tipo, titulo, fecha, area, requisitos, descripcion, columna_foto], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear el postgrado.' });
        } else {
            res.json({ message: 'Postgrado creado correctamente', id: results.insertId });
        }
    });
});

// Actualizar un postgrado existente
router.put('/update/:id', (req, res) => {
    const { tipo, titulo, fecha, area, requisitos, descripcion, columna_foto } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE PostGrado SET tipo = ?, titulo = ?, fecha = ?, area = ?, requisitos = ?, descripcion = ?, columna_foto = ? WHERE id_postgrado = ?';
    connection.query(sql, [tipo, titulo, fecha, area, requisitos, descripcion, columna_foto, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al actualizar el postgrado.' });
        } else {
            res.json({ message: 'Postgrado actualizado correctamente' });
        }
    });
});

// Eliminar un postgrado
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM PostGrado WHERE id_postgrado = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar el postgrado.' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Postgrado no encontrado' });
            } else {
                res.json({ message: 'Postgrado eliminado correctamente' });
            }
        }
    });
});

module.exports = router;
