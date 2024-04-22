const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Aplicar middleware CORS para permitir solicitudes de tu aplicación Vue
app.use(cors({
  origin: 'http://localhost:8080'  // Permitir sólo solicitudes de esta URL
}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dron_ucb'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Conexión exitosa a la base de datos MySQL');
});

app.get('/api/tables', (req, res) => {
  connection.query('SHOW TABLES', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
