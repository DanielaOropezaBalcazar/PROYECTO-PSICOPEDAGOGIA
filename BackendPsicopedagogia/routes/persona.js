const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/api/persona-graduado', (req, res) => {
    const { nombre, apellido, telefono, graduado } = req.body;
    const sqlPersona = 'INSERT INTO persona (nombre, apellido, telefono) VALUES (?, ?, ?)';

    connection.query(sqlPersona, [nombre, apellido, telefono], (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }

        const personaId = results.insertId;
        const sqlGraduado = 'INSERT INTO graduados (anio, trabajo_grado, testimonio, persona_id_persona) VALUES (?, ?, ?, ?)';

        connection.query(sqlGraduado, [graduado.anio, graduado.trabajo_grado, graduado.testimonio, personaId], (error, results) => {
            if (error) {
                res.status(500).send(error);
                return;
            }
            res.send({ message: 'Persona y graduado insertados correctamente', personaId });
        });
    });
});

module.exports = router;