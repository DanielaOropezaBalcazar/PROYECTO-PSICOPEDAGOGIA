const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Aquí es donde debes poner la línea de código


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1590PPL',
  database: 'psicopedagogia'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Conexión exitosa a la base de datos');
});


app.post('/api/persona-graduado', (req, res) => {
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

// Función para mostrar los datos de la tabla Usuario
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM Usuario';
  connection.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Hubo un error al recuperar los datos de la tabla Usuario.' });
      throw error;
    }
    res.json(results);
  });
});

// Función para realizar el inicio de sesión
app.post('/login', (req, res) => {
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

// Función para mostrar los datos de la tabla Actividades
app.get('/actividades', (req, res) => {
  const sql = 'SELECT * FROM actividades_universidad';
  connection.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Hubo un error al recuperar los datos de la tabla Usuario.' });
      throw error;
    }
    res.json(results);
  });
});

// Función para modificar una actividad
app.put('/actividades/:id', (req, res) => {
  const { nombre_actividad, columna_foto, descripcion, fecha, Usuario_id_usuario, tipo_actividad_id_tipo_actividad } = req.body;
  const { id } = req.params;

  // No es necesario crear un Buffer ni convertirlo a base64
  const foto = columna_foto;

  console.log(foto)
  console.log(columna_foto)
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

// Función para eliminar una actividad
app.delete('/actividades/:id', (req, res) => {
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
