const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM Usuario';
    connection.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Hubo un error al recuperar los datos de la tabla Usuario.' });
            throw error;
        }
        res.json(results);
    });
});

router.post('/login', (req, res) => {
    const { correo, contrasenia } = req.body;
    if (!correo || !contrasenia) {
        return res.status(400).json({ error: 'Por favor, proporciona correo y contraseña.' });
    }

    const sql = 'SELECT * FROM Usuario WHERE correo = ? AND contrasenia = ?';
    connection.query(sql, [correo, contrasenia], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Hubo un error al intentar iniciar sesión.' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Credenciales incorrectas.' });
        }
        // Inicio de sesión exitoso, se puede devolver información adicional si es necesario
        return res.json({ message: 'Inicio de sesión exitoso', usuario: results[0] });
    });
});

module.exports = router;