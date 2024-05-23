const express = require('express');
const router = express.Router();
const connection = require('../db');  // Asegúrate de que esta ruta es correcta

// Obtener todas las alianzas con información de ciudad y país
router.get('/', (req, res) => {
    const sql = `
        SELECT 
            alianzas.*, 
            ciudad.ciudad, 
            pais.pais 
        FROM 
            alianzas
        JOIN 
            ciudad ON alianzas.ciudad_id_ciudad = ciudad.id_ciudad
        JOIN 
            pais ON ciudad.pais_id_pais = pais.id_pais
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de las alianzas.' });
        } else {
            res.json(results);
        }
    });
});

// Crear una nueva alianza
router.post('/create', (req, res) => {
    const { Universidad, direccion, descripcion, ciudad_id_ciudad, columna_foto } = req.body;
    const sql = 'INSERT INTO alianzas (Universidad, direccion, descripcion, ciudad_id_ciudad, columna_foto) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [Universidad, direccion, descripcion, ciudad_id_ciudad, columna_foto], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al crear la alianza.' });
        } else {
            res.json({ message: 'Alianza creada correctamente', id: results.insertId });
        }
    });
});

// Actualizar una alianza
router.put('/update/:id', (req, res) => {
    const { Universidad, direccion, descripcion, ciudad_id_ciudad, columna_foto } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE alianzas SET Universidad = ?, direccion = ?, descripcion = ?, ciudad_id_ciudad = ?, columna_foto = ? WHERE id_alianza = ?';
    connection.query(sql, [Universidad, direccion, descripcion, ciudad_id_ciudad, columna_foto, id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al actualizar la alianza.' });
        } else {
            res.json({ message: 'Alianza actualizada correctamente' });
        }
    });
});

// Eliminar una alianza
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM alianzas WHERE id_alianza = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar la alianza.' });
        } else {
            res.json({ message: 'Alianza eliminada correctamente' });
        }
    });
});

// Obtener todos los países
router.get('/paises', (req, res) => {
    const sql = 'SELECT * FROM pais';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de los países.' });
        } else {
            res.json(results);
        }
    });
});

// Obtener todas las ciudades de un país específico por su ID
router.get('/ciudades/:id_pais', (req, res) => {
    const { id_pais } = req.params;
    const sql = 'SELECT * FROM ciudad WHERE pais_id_pais = ?';
    connection.query(sql, [id_pais], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de las ciudades.' });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
