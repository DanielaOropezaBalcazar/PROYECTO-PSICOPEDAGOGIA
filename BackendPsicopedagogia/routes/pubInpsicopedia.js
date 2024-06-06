const express = require('express');
const router = express.Router();
const connection = require('../db');  // Asegúrate de que esta ruta es correcta

// Obtener todas las publicaciones
router.get('/', (req, res) => {
    const sql = `
        SELECT 
            publicacion_inpsicopedia.*, 
            integrantes_inpsicopedia.id_integrante, 
            persona.nombre, 
            persona.apellido
        FROM 
            publicacion_inpsicopedia
        JOIN 
            integrantes_inpsicopedia ON publicacion_inpsicopedia.integrantes_inpsicopedia_id_integrante = integrantes_inpsicopedia.id_integrante
        JOIN
            persona ON integrantes_inpsicopedia.persona_id_persona = persona.id_persona
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar las publicaciones.' });
        } else {
            res.json(results);
        }
    });
});


// Crear una nueva publicación
router.post('/create', (req, res) => {
    const { fecha, imagen, descripcion, integrantes_inpsicopedia_id_integrante } = req.body;

    // Verificar si el integrante existe
    const checkIntegranteSql = 'SELECT * FROM integrantes_inpsicopedia WHERE id_integrante = ?';
    connection.query(checkIntegranteSql, [integrantes_inpsicopedia_id_integrante], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al verificar la existencia del integrante.' });
            return;
        }

        if (results.length > 0) {
            // El integrante existe, insertar la publicación
            const insertPublicacionSql = 'INSERT INTO publicacion_inpsicopedia (fecha, imagen, descripcion, integrantes_inpsicopedia_id_integrante) VALUES (?, ?, ?, ?)';
            connection.query(insertPublicacionSql, [fecha, imagen, descripcion, integrantes_inpsicopedia_id_integrante], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear la publicación.' });
                } else {
                    res.json({ message: 'Publicación creada correctamente', id: results.insertId });
                }
            });
        } else {
            res.status(400).json({ error: 'El integrante no existe.' });
        }
    });
});

// Actualizar una publicación
router.put('/update/:id', (req, res) => {
    const { fecha, imagen, descripcion, integrantes_inpsicopedia_id_integrante } = req.body;
    const { id } = req.params;

    // Verificar si el integrante existe
    const checkIntegranteSql = 'SELECT * FROM integrantes_inpsicopedia WHERE id_integrante = ?';
    connection.query(checkIntegranteSql, [integrantes_inpsicopedia_id_integrante], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al verificar la existencia del integrante.' });
            return;
        }

        if (results.length > 0) {
            // El integrante existe, actualizar la publicación
            const updatePublicacionSql = 'UPDATE publicacion_inpsicopedia SET fecha = ?, imagen = ?, descripcion = ?, integrantes_inpsicopedia_id_integrante = ? WHERE id_publicacion = ?';
            connection.query(updatePublicacionSql, [fecha, imagen, descripcion, integrantes_inpsicopedia_id_integrante, id], (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al actualizar la publicación.' });
                } else {
                    res.json({ message: 'Publicación actualizada correctamente' });
                }
            });
        } else {
            res.status(400).json({ error: 'El integrante no existe.' });
        }
    });
});

// Eliminar una publicación
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM publicacion_inpsicopedia WHERE id_publicacion = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar la publicación.' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Publicación no encontrada' });
            } else {
                res.json({ message: 'Publicación eliminada correctamente' });
            }
        }
    });
});

module.exports = router;
