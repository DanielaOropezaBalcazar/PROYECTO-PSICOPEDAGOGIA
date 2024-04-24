const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
