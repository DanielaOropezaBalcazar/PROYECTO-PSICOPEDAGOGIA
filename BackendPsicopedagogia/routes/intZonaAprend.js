const express = require('express');
const router = express.Router();
const connection = require('../db');  // Asegúrate de que esta ruta es correcta

// Obtener todos los integrantes con información de persona
router.get('/', (req, res) => {
    const sql = `
        SELECT 
            integrantes_zona_aprendizaje.*, 
            persona.nombre, 
            persona.apellido, 
            persona.telefono 
        FROM 
            integrantes_zona_aprendizaje
        JOIN 
            persona ON integrantes_zona_aprendizaje.persona_id_persona = persona.id_persona
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de los integrantes.' });
        } else {
            res.json(results);
        }
    });
});

// Crear un nuevo integrante
router.post('/create', (req, res) => {
    const { nombre, apellido, telefono, fecha_ingreso, columna_foto } = req.body;

    // Verificar si la persona ya existe
    const checkPersonaSql = 'SELECT * FROM persona WHERE nombre = ? AND apellido = ? AND telefono = ?';
    connection.query(checkPersonaSql, [nombre, apellido, telefono], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al verificar la existencia de la persona.' });
            return;
        }

        if (results.length > 0) {
            // La persona ya existe, obtener su id_persona
            const id_persona = results[0].id_persona;
            // Insertar en la tabla integrantes_zona_aprendizaje
            const insertIntegranteSql = 'INSERT INTO integrantes_zona_aprendizaje (fecha_ingreso, columna_foto, persona_id_persona) VALUES (?, ?, ?)';
            connection.query(insertIntegranteSql, [fecha_ingreso, columna_foto, id_persona], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear el integrante.' });
                } else {
                    res.json({ message: 'Integrante creado correctamente', id: results.insertId });
                }
            });
        } else {
            // La persona no existe, insertar primero en la tabla persona
            const insertPersonaSql = 'INSERT INTO persona (nombre, apellido, telefono) VALUES (?, ?, ?)';
            connection.query(insertPersonaSql, [nombre, apellido, telefono], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear la persona.' });
                    return;
                }
                const id_persona = results.insertId;
                // Insertar en la tabla integrantes_zona_aprendizaje
                const insertIntegranteSql = 'INSERT INTO integrantes_zona_aprendizaje (fecha_ingreso, columna_foto, persona_id_persona) VALUES (?, ?, ?)';
                connection.query(insertIntegranteSql, [fecha_ingreso, columna_foto, id_persona], (error, results) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Hubo un error al crear el integrante.' });
                    } else {
                        res.json({ message: 'Integrante creado correctamente', id: results.insertId });
                    }
                });
            });
        }
    });
});

// Actualizar un integrante
router.put('/update/:id', (req, res) => {
    const { nombre, apellido, telefono, fecha_ingreso, columna_foto } = req.body;
    const { id } = req.params;

    // Primero, actualizar los datos de la persona
    const updatePersonaSql = `
        UPDATE persona 
        JOIN integrantes_zona_aprendizaje ON persona.id_persona = integrantes_zona_aprendizaje.persona_id_persona
        SET persona.nombre = ?, persona.apellido = ?, persona.telefono = ?
        WHERE integrantes_zona_aprendizaje.id_integrante = ?
    `;
    connection.query(updatePersonaSql, [nombre, apellido, telefono, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al actualizar los datos de la persona.' });
            return;
        }
        // Luego, actualizar los datos del integrante
        const updateIntegranteSql = 'UPDATE integrantes_zona_aprendizaje SET fecha_ingreso = ?, columna_foto = ? WHERE id_integrante = ?';
        connection.query(updateIntegranteSql, [fecha_ingreso, columna_foto, id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Hubo un error al actualizar el integrante.' });
            } else {
                res.json({ message: 'Integrante actualizado correctamente' });
            }
        });
    });
});

// Eliminar un integrante
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM integrantes_zona_aprendizaje WHERE id_integrante = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar el integrante.' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Integrante no encontrado' });
            } else {
                res.json({ message: 'Integrante eliminado correctamente' });
            }
        }
    });
});

module.exports = router;
