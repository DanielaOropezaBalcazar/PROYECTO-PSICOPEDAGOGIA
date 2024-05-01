const mysql = require('mysql');

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

module.exports = connection;