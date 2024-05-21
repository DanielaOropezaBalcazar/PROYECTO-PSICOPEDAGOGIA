const express = require('express');
const router = express.Router();
const connection = require('../db');

// Obtener todos los docentes
router.get('/', (req, res) => {
    const sql = 'SELECT p.*, pd.*\n' +
        'FROM persona p\n' +
        'JOIN plantel_docente pd ON p.id_persona = pd.persona_id_persona;\n';
    connection.query(sql, (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.json(results);
    });
});

// Obtener un docente por su ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM plantel_docente WHERE id_docente = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ message: 'Docente no encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear un nuevo docente (Valida si la persona ya existe)
router.post('/create', (req, res) => {
    const { nombre, apellido, telefono, area, profesion, columna_foto } = req.body;
    // Comprobar si la persona ya existe
    connection.query('SELECT * FROM persona WHERE nombre = ? AND apellido = ?', [nombre, apellido], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        if (results.length > 0) {
            // La persona ya existe, obtener su id_persona
            const personaId = results[0].id_persona;
            // Insertar el docente
            insertDocente(personaId, area, profesion, columna_foto, res);
        } else {
            // La persona no existe, insertarla primero
            connection.query('INSERT INTO persona (nombre, apellido, telefono) VALUES (?, ?, ?)', [nombre, apellido, telefono], (error, results) => {
                if (error) {
                    res.status(500).send(error);
                    return;
                }
                // Obtener el id_persona generado
                const personaId = results.insertId;
                // Insertar el docente
                insertDocente(personaId, area, profesion, columna_foto, res);
            });
        }
    });
});

// Función para insertar un nuevo docente en la tabla plantel_docente
function insertDocente(personaId, area, profesion, columna_foto, res) {
    connection.query('INSERT INTO plantel_docente (area, profesion, columna_foto, persona_id_persona) VALUES (?, ?, ?, ?)', [area, profesion, columna_foto, personaId], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.send({ message: 'Docente creado correctamente', id: results.insertId });
    });
}

// Actualizar un docente
router.put('/update/:id', (req, res) => {
    const { nombre, apellido, telefono, area, profesion, columna_foto } = req.body;
    const { id } = req.params;

    // Primero, actualizar los datos de la persona
    const updatePersonaSql = `
        UPDATE persona 
        JOIN plantel_docente ON persona.id_persona = plantel_docente.persona_id_persona
        SET persona.nombre = ?, persona.apellido = ?, persona.telefono = ?
        WHERE plantel_docente.id_docente = ?
    `;
    connection.query(updatePersonaSql, [nombre, apellido, telefono, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error al actualizar los datos de la persona.' });
            return;
        }
        // Luego, actualizar los datos del docente
        const updateDocenteSql = 'UPDATE plantel_docente SET area = ?, profesion = ?, columna_foto = ? WHERE id_docente = ?';
        connection.query(updateDocenteSql, [area, profesion, columna_foto, id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Hubo un error al actualizar el docente.' });
            } else {
                res.json({ message: 'Docente actualizado correctamente' });
            }
        });
    });
});


// Eliminar un docente
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM plantel_docente WHERE id_docente = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send({ message: 'Docente no encontrado' });
            return;
        }
        res.send({ message: 'Docente eliminado correctamente' });
    });
});

module.exports = router;
