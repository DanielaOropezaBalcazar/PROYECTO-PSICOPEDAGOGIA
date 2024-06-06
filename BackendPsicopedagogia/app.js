const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const personaRouter = require('./routes/persona');
const usuarioRouter = require('./routes/usuario');
const actividadesRouter = require('./routes/actividades');
const plantelDocenteRouter = require('./routes/plantel_docente');
const autoridadRouter = require('./routes/autoridad');
const alianzaRouter = require('./routes/alianza');
const intInpsicopediaRouter = require('./routes/intInpsicopedia');
const intZonaAprendRouter = require('./routes/intZonaAprend');
const publicacionInpsicopediaRouter = require('./routes/pubInpsicopedia');
const publicacionZonaAprendRouter = require('./routes/pubZonaAprend');
const trabajosRealizados = require('./routes/trabajo_realizado');

const app = express();

// Seguridad CORS
app.use(cors({
  origin: 'http://localhost:8080' // Solo permite solicitudes de este origen
}));

// Configuración para recibir datos en formato JSON
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Configuración de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configuración de los middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de las rutas
app.use('/api/persona-graduado', personaRouter);
app.use('/usuarios', usuarioRouter);
app.use('/actividades', actividadesRouter);
app.use('/plantel-docente', plantelDocenteRouter);
app.use('/autoridad', autoridadRouter);
app.use('/alianza', alianzaRouter);
app.use('/int-inpsicopedia', intInpsicopediaRouter);
app.use('/int-zona-aprendizaje', intZonaAprendRouter);
app.use('/pub-inpsicopedia', publicacionInpsicopediaRouter);
app.use('/pub-zona-aprendizaje', publicacionZonaAprendRouter);
app.use('/trabajos-realizados', trabajosRealizados);

// Manejador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;