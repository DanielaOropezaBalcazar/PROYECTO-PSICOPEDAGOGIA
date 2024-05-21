const express = require('express');
const router = express.Router();
const connection = require('../db');  // Asegúrate de que esta ruta es correcta

// Obtener todas las autoridades con información de persona
router.get('/', (req, res) => {
    const sql = `
        SELECT autoridades.*, persona.nombre, persona.apellido, persona.telefono 
        FROM autoridades
        JOIN persona ON autoridades.persona_id_persona = persona.id_persona
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de las autoridades.' });
        } else {
            res.json(results);
        }
    });
});

// Crear una nueva autoridad
router.post('/create', (req, res) => {
    const { nombre, apellido, telefono, autoridad, rol, columna_foto } = req.body;

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
            // Insertar en la tabla autoridades
            const insertAutoridadSql = 'INSERT INTO autoridades (autoridad, rol, columna_foto, persona_id_persona) VALUES (?, ?, ?, ?)';
            connection.query(insertAutoridadSql, [autoridad, rol, columna_foto, id_persona], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Hubo un error al crear la autoridad.' });
                } else {
                    res.json({ message: 'Autoridad creada correctamente', id: results.insertId });
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
                // Insertar en la tabla autoridades
                const insertAutoridadSql = 'INSERT INTO autoridades (autoridad, rol, columna_foto, persona_id_persona) VALUES (?, ?, ?, ?)';
                connection.query(insertAutoridadSql, [autoridad, rol, columna_foto, id_persona], (error, results) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Hubo un error al crear la autoridad.' });
                    } else {
                        res.json({ message: 'Autoridad creada correctamente', id: results.insertId });
                    }
                });
            });
        }
    });
});

// Actualizar una autoridad
router.put('/update/:id', (req, res) => {
    const { nombre, apellido, telefono, autoridad, rol, columna_foto } = req.body;
    const { id } = req.params;

    // Primero, actualizar los datos de la persona
    const updatePersonaSql = `
        UPDATE persona 
        JOIN autoridades ON persona.id_persona = autoridades.persona_id_persona
        SET persona.nombre = ?, persona.apellido = ?, persona.telefono = ?
        WHERE autoridades.id_autoridad = ?
    `;
    connection.query(updatePersonaSql, [nombre, apellido, telefono, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al actualizar los datos de la persona.' });
            return;
        }
        // Luego, actualizar los datos de la autoridad
        const updateAutoridadSql = 'UPDATE autoridades SET autoridad = ?, rol = ?, columna_foto = ? WHERE id_autoridad = ?';
        connection.query(updateAutoridadSql, [autoridad, rol, columna_foto, id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Hubo un error al actualizar la autoridad.' });
            } else {
                res.json({ message: 'Autoridad actualizada correctamente' });
            }
        });
    });
});

// Eliminar una autoridad
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM autoridades WHERE id_autoridad = ?';
    connection.query(sql, [id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al eliminar la autoridad.' });
        } else {
            res.json({ message: 'Autoridad eliminada correctamente' });
        }
    });
});

module.exports = router;
