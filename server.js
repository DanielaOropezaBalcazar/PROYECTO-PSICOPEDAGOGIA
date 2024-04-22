const express = require('express');
const mysql = require('mysql');
const app = express();


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


app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
