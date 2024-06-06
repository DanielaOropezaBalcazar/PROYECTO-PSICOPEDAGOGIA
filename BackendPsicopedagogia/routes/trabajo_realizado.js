const express = require('express');
const router = express.Router();
const connection = require('../db');  // Asegúrate de que esta ruta es correcta

// Obtener todos los trabajos realizados
router.get('/', (req, res) => {
    const sql = `
        SELECT 
            trabajo_realizado.*, 
            persona.nombre, 
            persona.apellido, 
            persona.telefono 
        FROM 
            trabajo_realizado
        JOIN 
            persona ON trabajo_realizado.persona_id_persona = persona.id_persona
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los trabajos realizados.' });
        } else {
            res.json(results);
        }
    });
});

// Crear un nuevo trabajo realizado
router.post('/create', (req, res) => {
    const { titulo, area, publicacion, columna_foto, nombre, apellido, telefono, documento } = req.body;

    // Verificar si la persona existe
    const checkPersonaSql = 'SELECT * FROM persona WHERE nombre = ? AND apellido = ? AND telefono = ?';
    connection.query(checkPersonaSql, [nombre, apellido, telefono], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al verificar la existencia de la persona.' });
            return;
        }

        if (results.length > 0) {
            // La persona existe, insertar el trabajo realizado
            const persona_id_persona = results[0].id_persona;
            const insertTrabajoSql = 'INSERT INTO trabajo_realizado (titulo, area, publicacion, columna_foto, persona_id_persona, documento) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(insertTrabajoSql, [titulo, area, publicacion, columna_foto, persona_id_persona, documento], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear el trabajo realizado.' });
                } else {
                    res.json({ message: 'Trabajo realizado creado correctamente', id: results.insertId });
                }
            });
        } else {
            // La persona no existe, insertar la persona y el trabajo realizado
            const insertPersonaSql = 'INSERT INTO persona (nombre, apellido, telefono) VALUES (?, ?, ?)';
            connection.query(insertPersonaSql, [nombre, apellido, telefono], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear la persona.' });
                    return;
                }

                const persona_id_persona = results.insertId;
                const insertTrabajoSql = 'INSERT INTO trabajo_realizado (titulo, area, publicacion, columna_foto, persona_id_persona, documento) VALUES (?, ?, ?, ?, ?, ?)';
                connection.query(insertTrabajoSql, [titulo, area, publicacion, columna_foto, persona_id_persona, documento], (error, results) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Hubo un error al crear el trabajo realizado.' });
                    } else {
                        res.json({ message: 'Trabajo realizado creado correctamente', id: results.insertId });
                    }
                });
            });
        }
    });
});

// Actualizar un trabajo realizado
router.put('/update/:id', (req, res) => {
    const { titulo, area, publicacion, columna_foto, nombre, apellido, telefono, documento } = req.body;
    const { id } = req.params;

    // Verificar si la persona existe
    const checkPersonaSql = 'SELECT * FROM persona WHERE nombre = ? AND apellido = ? AND telefono = ?';
    connection.query(checkPersonaSql, [nombre, apellido, telefono], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al verificar la existencia de la persona.' });
            return;
        }

        if (results.length > 0) {
            // La persona existe, actualizar la persona y el trabajo realizado
            const persona_id_persona = results[0].id_persona;
            const updatePersonaSql = 'UPDATE persona SET nombre = ?, apellido = ?, telefono = ? WHERE id_persona = ?';
            connection.query(updatePersonaSql, [nombre, apellido, telefono, persona_id_persona], (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al actualizar la persona.' });
                    return;
                }

                const updateTrabajoSql = 'UPDATE trabajo_realizado SET titulo = ?, area = ?, publicacion = ?, columna_foto = ?, persona_id_persona = ?, documento = ? WHERE id_trabajo = ?';
                connection.query(updateTrabajoSql, [titulo, area, publicacion, columna_foto, persona_id_persona, documento, id], (error) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Hubo un error al actualizar el trabajo realizado.' });
                    } else {
                        res.json({ message: 'Trabajo realizado actualizado correctamente' });
                    }
                });
            });
        } else {
            // La persona no existe, insertar la persona y actualizar el trabajo realizado
            const insertPersonaSql = 'INSERT INTO persona (nombre, apellido, telefono) VALUES (?, ?, ?)';
            connection.query(insertPersonaSql, [nombre, apellido, telefono], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear la persona.' });
                    return;
                }

                const persona_id_persona = results.insertId;
                const updateTrabajoSql = 'UPDATE trabajo_realizado SET titulo = ?, area = ?, publicacion = ?, columna_foto = ?, persona_id_persona = ?, documento = ? WHERE id_trabajo = ?';
                connection.query(updateTrabajoSql, [titulo, area, publicacion, columna_foto, persona_id_persona, documento, id], (error) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Hubo un error al actualizar el trabajo realizado.' });
                    } else {
                        res.json({ message: 'Trabajo realizado actualizado correctamente' });
                    }
                });
            });
        }
    });
});

// Eliminar un trabajo realizado
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM trabajo_realizado WHERE id_trabajo = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar el trabajo realizado.' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Trabajo realizado no encontrado' });
            } else {
                res.json({ message: 'Trabajo realizado eliminado correctamente' });
            }
        }
    });
});

module.exports = router;
